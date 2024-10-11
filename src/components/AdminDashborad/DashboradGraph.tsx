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

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const DashboardGraph = () => {
    // Data for statistics
    const stats = {
        totalUsers: 10525,
        totalPosts: 5715,
        totalComments: 523,
        totalLikes: 12500,
        totalVerifiedUsers: 7540,
    };

    // Data for the bar chart
    const chartData = {
        labels: ['Users', 'Posts', 'Comments', 'Likes', 'Verified Users'],
        datasets: [
            {
                label: 'Statistics',
                data: [
                    stats.totalUsers,
                    stats.totalPosts,
                    stats.totalComments,
                    stats.totalLikes,
                    stats.totalVerifiedUsers,
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
                text: 'Platform Statistics',
            },
        },
    };

    return (
        <div className="min-h-screen bg-white py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">Admin Dashboard</h1>
                <p className="text-gray-500 mb-6">Latest statistics overview of your platform.</p>
                
                {/* Overview Cards */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-10">
                    {/* Total Users */}
                    <div className="bg-purple-100 p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold text-gray-800">Total Users</h2>
                        <p className="text-4xl font-bold text-gray-800 my-4">{stats.totalUsers.toLocaleString()}</p>
                    </div>

                    {/* Total Posts */}
                    <div className="bg-purple-100  p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold text-gray-800">Total Posts</h2>
                        <p className="text-4xl font-bold text-gray-800 my-4">{stats.totalPosts.toLocaleString()}</p>
                    </div>

                    {/* Total Comments */}
                    <div className="bg-purple-100  p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold text-gray-800">Total Comments</h2>
                        <p className="text-4xl font-bold text-gray-800 my-4">{stats.totalComments.toLocaleString()}</p>
                    </div>

                    {/* Total Likes */}
                    <div className="bg-purple-100  p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold text-gray-800">Total Likes</h2>
                        <p className="text-4xl font-bold text-gray-800 my-4">{stats.totalLikes.toLocaleString()}</p>
                    </div>

                    {/* Total Verified Users */}
                    <div className="bg-purple-100  p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold text-gray-800">Verified Users</h2>
                        <p className="text-4xl font-bold text-gray-800 my-4">{stats.totalVerifiedUsers.toLocaleString()}</p>
                    </div>
                </div>

                {/* Bar Graph */}
                <div className="bg-purple-100  p-6 rounded-lg shadow-md mb-10">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Platform Statistics Overview</h2>
                    <div>
                        <Bar data={chartData} options={chartOptions} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardGraph;
