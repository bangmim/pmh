import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

export default function Layout() {
    const location = useLocation();

    const isActive = (path: string) => {
        return location.pathname === path;
    };

    const navItems = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About' },
        { path: '/project', label: 'Project' },
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* 모바일 네비게이션 */}
            <nav className="md:hidden fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
                <ul className="flex justify-center items-center h-16 px-4">
                    {navItems.map((item) => (
                        <li key={item.path} className="flex-1">
                            <Link
                                to={item.path}
                                className={`
                                    block text-center py-2 transition-all duration-200
                                    ${
                                        isActive(item.path)
                                            ? 'text-gray-900 font-semibold border-b-2 border-gray-900'
                                            : 'text-gray-500 hover:text-gray-900'
                                    }
                                `}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* 데스크톱 사이드바 */}
            <aside className="hidden md:block fixed top-0 left-0 bottom-0 w-80 bg-white border-r border-gray-200 z-50">
                <div className="flex flex-col items-center pt-16 px-8">
                    {/* 프로필 */}
                    <div className="w-36 h-36 rounded-full overflow-hidden mb-6 transition-all duration-300">
                        <img
                            src="https://bangmim.github.io/pmh/img/pmh.jpg"
                            alt="박미현"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <h1 className="text-2xl font-bold text-gray-900 mb-2">박미현</h1>
                    <p className="text-lg text-gray-600 font-medium mb-1">Frontend Developer</p>
                    <p className="text-sm text-gray-500 mb-8">2023.10 - Present</p>

                    {/* 네비게이션 */}
                    <nav className="w-full">
                        <ul className="space-y-2">
                            {navItems.map((item) => (
                                <li key={item.path}>
                                    <Link
                                        to={item.path}
                                        className={`
                                            block px-6 py-3 text-center font-medium transition-all duration-200
                                            ${
                                                isActive(item.path)
                                                    ? 'bg-gray-900 text-white'
                                                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                                            }
                                        `}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </aside>

            {/* 메인 컨텐츠 */}
            <main className="pt-20 md:pt-12 md:ml-80 px-6 md:px-12 pb-12">
                <div className="max-w-4xl mx-auto animate-fade-in">
                    <Outlet />
                </div>
            </main>
        </div>
    );
}
