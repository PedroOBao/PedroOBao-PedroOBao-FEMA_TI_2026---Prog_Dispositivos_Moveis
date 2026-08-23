import { createContext, useContext, useState } from 'react';

const WorkoutContext = createContext(null);

export function WorkoutProvider({ children }) {
    const [workouts, setWorkouts] = useState([]);
    const [workoutHistory, setWorkoutHistory] = useState([]);

    function addWorkout(workout) {
        const newWorkout = {
            ...workout,
            id: Date.now().toString(),
            createdAt: new Date().toISOString(),
        };

        setWorkouts((currentWorkouts) => [newWorkout, ...currentWorkouts]);
        return newWorkout;
    }

    function removeWorkout(workoutId) {
        setWorkouts((currentWorkouts) => currentWorkouts.filter((workout) => workout.id !== workoutId));
    }

    function completeWorkout(workout) {
        const durationMinutes = Math.max(
            5,
            Math.round(workout.elements.reduce((total, element) => total + (element.type === 'rest' ? Number(element.duration) / 60 : 8), 0)),
        );

        setWorkoutHistory((currentHistory) => [
            ...currentHistory,
            {
                id: `${workout.id}-${Date.now()}`,
                workoutId: workout.id,
                workoutName: workout.name,
                durationMinutes,
                completedAt: new Date().toISOString(),
            },
        ]);
    }

    function getWorkoutStats() {
        const now = new Date();
        const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        const dateKey = (date) => `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
        const historyDates = new Set(workoutHistory.map((session) => dateKey(new Date(session.completedAt))));
        const completedThisWeek = workoutHistory.filter((session) => {
            const completedDate = new Date(session.completedAt);
            const daysAgo = Math.floor((today - new Date(completedDate.getFullYear(), completedDate.getMonth(), completedDate.getDate())) / 86400000);
            return daysAgo >= 0 && daysAgo < 7;
        }).length;
        let currentStreak = 0;
        const streakDate = new Date(today);

        while (historyDates.has(dateKey(streakDate))) {
            currentStreak += 1;
            streakDate.setDate(streakDate.getDate() - 1);
        }

        return {
            completedThisWeek,
            totalCompleted: workoutHistory.length,
            totalMinutes: workoutHistory.reduce((total, session) => total + session.durationMinutes, 0),
            currentStreak,
            weeklyGoal: 5,
            weekDays: Array.from({ length: 7 }, (_, index) => {
                const day = new Date(today);
                day.setDate(today.getDate() - (6 - index));
                return { date: dateKey(day), label: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'][day.getDay()], done: historyDates.has(dateKey(day)) };
            }),
        };
    }

    return (
        <WorkoutContext.Provider value={{ workouts, addWorkout, removeWorkout, completeWorkout, getWorkoutStats }}>
            {children}
        </WorkoutContext.Provider>
    );
}

export function useWorkouts() {
    const context = useContext(WorkoutContext);

    if (!context) {
        throw new Error('useWorkouts must be used inside WorkoutProvider');
    }

    return context;
}
