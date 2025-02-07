import { usePage } from "@inertiajs/react";
import React from "react";

const BankDashboard: React.FC = () => {
    const recentTransactions = [
        { id: 1, description: "Payment to XYZ Store", amount: -50.0, date: "2025-02-05" },
        { id: 2, description: "Deposit from Employer", amount: 1500.0, date: "2025-02-03" },
        { id: 3, description: "Payment to ABC Service", amount: -120.0, date: "2025-02-01" },
        { id: 4, description: "Transfer from Jane", amount: 200.0, date: "2025-01-30" },
    ];

    const data = usePage();
    console.log(data.props.key1);

    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar */}
            <div className="w-64 bg-blue-800 text-white p-6">
                <h1 className="text-3xl font-semibold mb-8">Bank Dashboard</h1>
                <ul>
                    <li className="mb-4">
                        <a href="#" className="text-lg hover:text-gray-300">Dashboard</a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="text-lg hover:text-gray-300">Accounts</a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="text-lg hover:text-gray-300">Transactions</a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="text-lg hover:text-gray-300">Investments</a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="text-lg hover:text-gray-300">Settings</a>
                    </li>
                </ul>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-6">
                {/* Account Summary */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold mb-4">Account Balance</h2>
                        <div className="text-5xl font-bold text-green-600">$5,432.50</div>
                        <p className="text-gray-600 mt-2">Available Balance</p>
                    </div>

                    {/* Balance Breakdown */}
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold mb-4">Balance Breakdown</h2>
                        <ul className="space-y-4">
                            <li className="flex justify-between">
                                <span>Checking Account</span>
                                <span className="font-bold text-green-600">$2,150.00</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Savings Account</span>
                                <span className="font-bold text-blue-600">$1,950.50</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Investment Account</span>
                                <span className="font-bold text-yellow-600">$1,332.00</span>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Actions */}
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold mb-4">Quick Actions</h2>
                        <div className="space-y-4">
                            <button className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                                Transfer Money
                            </button>
                            <button className="w-full py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700">
                                Deposit Funds
                            </button>
                            <button className="w-full py-2 px-4 bg-yellow-600 text-white rounded-md hover:bg-yellow-700">
                                Request Loan
                            </button>
                        </div>
                    </div>
                </div>

                {/* Recent Transactions */}
                <div className="bg-white p-6 rounded-lg shadow-lg mt-8">
                    <h2 className="text-2xl font-semibold mb-4">Recent Transactions</h2>
                    <ul>
                        {recentTransactions.map((transaction) => (
                            <li key={transaction.id} className="flex justify-between py-3 border-b">
                                <div>
                                    <span className="block font-medium text-gray-800">{transaction.description}</span>
                                    <span className="text-sm text-gray-500">{transaction.date}</span>
                                </div>
                                <span className={`font-semibold ${transaction.amount < 0 ? 'text-red-600' : 'text-green-600'}`}>
                                    {transaction.amount < 0 ? '-' : '+'} ${Math.abs(transaction.amount).toFixed(2)}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Portfolio / Investment Insights */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold mb-4">Portfolio Insights</h2>
                        <p className="text-lg text-gray-600">Your investment portfolio has grown by 5.4% this month.</p>
                        <div className="mt-4">
                            <span className="block text-xl font-bold">Total Value: </span>
                            <span className="text-green-600 text-3xl">$1,332.00</span>
                        </div>
                    </div>

                    {/* Analytics (Placeholder for charts) */}
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold mb-4">Account Analytics</h2>
                        <div className="h-48 bg-gray-300 rounded-lg">
                            {/* Placeholder for Chart */}
                            <p className="text-center text-gray-500 mt-20">Chart Placeholder</p>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <footer className="mt-8 text-center text-gray-500">
                    <p>&copy; 2025 Bank, Inc. All rights reserved.</p>
                </footer>
            </div>
        </div>
    );
};

export default BankDashboard;
