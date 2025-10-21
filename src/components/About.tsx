import React from 'react';

export default function About() {
    const skills = [
        {
            icon: '📱',
            name: 'React Native',
            desc: '실무 앱 개발 및 유지보수 (2023.10 ~ 현재)',
        },
        {
            icon: '⚛️',
            name: 'React',
            desc: '웹 기반 관리자 페이지 개발 경험',
        },
        {
            icon: '🔷',
            name: 'TypeScript / JavaScript',
            desc: '타입 안정성을 고려한 개발',
        },
        {
            icon: '🔄',
            name: 'Redux / Zustand',
            desc: '전역 상태 관리 (Context API 병행)',
        },
        {
            icon: '💬',
            name: 'WebSocket (STOMP)',
            desc: '실시간 채팅 기능 개발 경험',
        },
        {
            icon: '🎨',
            name: 'HTML / CSS / Tailwind',
            desc: '반응형 UI 구현',
        },
        {
            icon: '🔧',
            name: 'Git / 앱 스토어',
            desc: 'iOS/Android 배포 및 버전 관리',
        },
    ];

    const experiences = [
        '모바일 앱 개발 및 유지보수 (2023.10 ~ 현재, 48,000명 사용자 대상)',
        '디자인/기획자와 협업하여 요구사항 분석 및 기능 구현',
        'WebSocket(STOMP) 기반 실시간 채팅 시스템 개발',
        'Redux, Zustand, Context API를 활용한 전역 상태 관리',
        '사용자 피드백 기반 기능 개선 및 성능 최적화',
        'iOS / Android 스토어 배포 및 버전 관리',
    ];

    return (
        <div className="space-y-16 animate-slide-up">
            {/* 인사 */}
            <div className="section">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">안녕하세요.</h1>
                <p className="text-xl md:text-2xl text-gray-700">
                    프론트엔드 개발자 <span className="font-bold text-gray-900">박미현</span>입니다.
                </p>
                <p className="text-lg text-gray-600 mt-3">React Native 앱 개발 및 웹 개발 (2023.10 ~ 현재)</p>
            </div>

            {/* 소개 */}
            <div className="section space-y-4">
                <p className="text-lg text-gray-700 leading-relaxed">
                    2023년 10월부터 현재까지 48,000여명이 이용하는 모바일 앱을 개발하고 유지보수하고 있습니다.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                    디자인/기획자, 백엔드 개발자와 협업하며 실시간 채팅, 커뮤니티 등 다양한 기능을 구현했고, 여러 상태
                    관리 도구를 프로젝트 상황에 맞게 활용하며 기술적으로 성장했습니다.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                    한국방송통신대학교에서 컴퓨터과학을 공부하며 개발 실무와 이론을 병행하고 있으며, 더 나은 개발자가
                    되기 위해 꾸준히 학습하고 있습니다.
                </p>
            </div>

            {/* 학습 배경 */}
            <div className="section">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <span>📚</span>
                    교육 및 경력
                </h2>
                <div className="space-y-5">
                    <div className="border-l-4 border-gray-900 pl-4">
                        <p className="font-bold text-gray-900 mb-1">한국방송통신대학교 컴퓨터과학과</p>
                        <p className="text-gray-600 mb-2">재학 중 (4학년)</p>
                        <p className="text-sm text-gray-500">컴퓨터과학 기초 이론 및 알고리즘, 자료구조 학습</p>
                    </div>
                    <div className="border-l-4 border-gray-400 pl-4">
                        <p className="font-bold text-gray-900 mb-1">React Native 앱 개발</p>
                        <p className="text-gray-600 mb-2">2023.10 ~ 현재 (재직 중)</p>
                        <p className="text-sm text-gray-500">
                            약국 관리 모바일 앱 개발 및 유지보수 (누적 사용자 48,000명)
                        </p>
                    </div>
                    <div className="border-l-4 border-gray-400 pl-4">
                        <p className="font-bold text-gray-900 mb-1">코리아IT아카데미학원</p>
                        <p className="text-gray-600 mb-2">프론트엔드 개발 과정 수료</p>
                        <p className="text-sm text-gray-500">HTML, CSS, JavaScript, React 기반 웹 개발</p>
                    </div>
                </div>
            </div>

            {/* 업무 경험 */}
            <div className="section">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <span>🎯</span>
                    주요 업무 경험
                </h2>
                <ul className="space-y-3">
                    {experiences.map((exp, index) => (
                        <li key={index} className="flex items-start gap-3 text-lg text-gray-700">
                            <span className="text-gray-900 font-bold mt-1">•</span>
                            <span>{exp}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* 기술 스택 */}
            <div className="section">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <span>💻</span>
                    기술 스택 및 경험
                </h2>
                <div className="grid grid-cols-1 gap-4">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="flex items-start gap-3 p-4 bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
                        >
                            <span className="text-2xl mt-0.5">{skill.icon}</span>
                            <div>
                                <p className="text-lg font-semibold text-gray-900">{skill.name}</p>
                                <p className="text-sm text-gray-600 mt-1">{skill.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* 업무 방식 */}
            <div className="section">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">업무 방식</h2>
                <div className="space-y-3 text-gray-700">
                    <p className="flex items-start gap-2">
                        <span className="text-gray-900 font-bold mt-1">•</span>
                        <span>
                            코드 가독성과 재사용성을 고려하며, 리팩토링을 통해 지속적으로 코드 품질을 개선합니다.
                        </span>
                    </p>
                    <p className="flex items-start gap-2">
                        <span className="text-gray-900 font-bold mt-1">•</span>
                        <span>팀원들과 적극적으로 소통하며 협업합니다.</span>
                    </p>
                </div>
            </div>

            {/* 마무리 메시지 */}
            <div className="section bg-gray-900 text-white p-8">
                <p className="text-xl md:text-2xl font-medium leading-relaxed">
                    실무 경험과 학업을 병행하며 성장하고 있습니다.
                    <br />
                    앞으로도 사용자에게 가치 있는 서비스를 만드는 개발자가 되겠습니다.
                </p>
            </div>
        </div>
    );
}
