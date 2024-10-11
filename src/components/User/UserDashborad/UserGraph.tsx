"use client"

import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import { useState, useEffect } from "react";
import { getCurrentUser } from "@/services/AuthService";
import { IUser } from "@/types";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const UserGraph = () => {

    const [user, setUser] = useState<IUser | null>(null);

    const handleUser = async () => {
      const user = await getCurrentUser();
      setUser(user);
    };
  
    useEffect(() => {
      handleUser();
    }, []);
  


    // Data for statistics
    const stats = {
        myPosts: 120,
        totalLikes: 3500,
        totalComments: 850,
        totalFollowers: 500,
        totalFollowing: 300,
    };

    // Data for the bar chart
    const chartData = {
        labels: ['My Posts', 'Likes', 'Comments', 'Followers', 'Following'],
        datasets: [
            {
                label: 'User Stats',
                data: [
                    stats.myPosts,
                    stats.totalLikes,
                    stats.totalComments,
                    stats.totalFollowers,
                    stats.totalFollowing,
                ],
                backgroundColor: ['#4caf50', '#2196f3', '#ff9800', '#f44336', '#9c27b0'],
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        plugins: {
            legend: { display: false },
            title: {
                display: true,
                text: 'User Engagement Overview',
            },
        },
    };

    return (
        <div className="min-h-screen py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">Welcome, {user?.name}</h1>
                <p className="text-gray-500 mb-6">Here’s a quick overview of your activity.</p>
                
                {/* Overview Cards */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-10">
                    {/* My Posts */}
                    <div className="bg-purple-100 p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold text-gray-800">My Posts</h2>
                        <p className="text-4xl font-bold text-gray-800 my-4">{stats.myPosts}</p>
                    </div>

                    {/* Total Likes */}
                    <div className="bg-purple-100 p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold text-gray-800">Total Likes</h2>
                        <p className="text-4xl font-bold text-gray-800 my-4">{stats.totalLikes.toLocaleString()}</p>
                    </div>

                    {/* Total Comments */}
                    <div className="bg-purple-100 p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold text-gray-800">Total Comments</h2>
                        <p className="text-4xl font-bold text-gray-800 my-4">{stats.totalComments.toLocaleString()}</p>
                    </div>

                    {/* Total Followers */}
                    <div className="bg-purple-100 p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold text-gray-800">Total Followers</h2>
                        <p className="text-4xl font-bold text-gray-800 my-4">{stats.totalFollowers.toLocaleString()}</p>
                    </div>

                    {/* Total Following */}
                    <div className="bg-purple-100 p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold text-gray-800">Total Following</h2>
                        <p className="text-4xl font-bold text-gray-800 my-4">{stats.totalFollowing.toLocaleString()}</p>
                    </div>
                </div>

                {/* Bar Graph */}
                <div className="bg-purple-100 p-6 rounded-lg shadow-md mb-10">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Activity Overview</h2>
                    <div>
                        <Bar data={chartData} options={chartOptions} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserGraph;
