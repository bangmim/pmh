import React from 'react';
import ReactPlayer from 'react-player/lazy';

interface Skill {
    name: string;
    icon: string | JSX.Element;
}

interface ProjectData {
    id: number;
    title: string;
    subtitle: string;
    image: string;
    description: string;
    skills: Skill[];
    highlights?: string[];
    review: string;
    link?: string;
    video?: string;
}

export default function Project() {
    const projects: ProjectData[] = [
        {
            id: 1,
            title: '약국 관리 모바일 앱',
            subtitle: 'React Native 앱 개발 및 유지보수 (2023.10 ~ 현재)',
            image: 'https://bangmim.github.io/pmh/img/pmh.jpg',
            description:
                '약국 및 의료기관을 위한 종합 관리 앱입니다. 2023년 10월부터 현재까지 개발 및 유지보수를 담당하고 있으며, 현재 48,000명의 사용자가 이용하고 있습니다.',
            skills: [
                { name: 'React Native', icon: '📱' },
                { name: 'TypeScript', icon: '🔷' },
                { name: 'iOS / Android', icon: '📲' },
                { name: 'Redux', icon: '🔄' },
                { name: 'Context API', icon: '⚙️' },
                { name: 'Zustand', icon: '🐻' },
                { name: 'WebSocket (STOMP)', icon: '💬' },
                { name: 'REST API', icon: '🔌' },
                { name: 'Firebase', icon: '🔥' },
            ],
            highlights: [
                '실시간 채팅: WebSocket(STOMP) 기반 채팅 시스템 구현',
                '커뮤니티 기능: 게시글 작성/수정/삭제(CRUD), 댓글/좋아요 기능 구현',
                '약국 관리: 약국 운영을 위한 종합 관리 서비스 개발',
                '전역 상태 관리: Context API, Redux, Zustand를 활용한 전역 모달 설계',
            ],
            review: 'WebSocket(STOMP)을 활용한 실시간 채팅, Context API/Redux/Zustand를 활용한 전역 상태 관리 등 다양한 기술을 프로젝트 요구사항에 맞게 선택하여 적용했습니다. 48,000명의 사용자를 대상으로 하는 만큼 성능 최적화와 안정성에 중점을 두었으며, 사용자 피드백을 반영한 지속적인 개선 작업을 경험했습니다.',
        },
        {
            id: 2,
            title: '앱 관리 웹 페이지',
            subtitle: 'React 기반 관리자 전용 CMS',
            image: 'https://bangmim.github.io/pmh/img/pmh.jpg',
            description:
                '모바일 앱과 연동되는 관리자 전용 웹 페이지입니다. 앱에 등록할 콘텐츠를 편리하게 작성하고 관리할 수 있도록 개발했습니다.',
            skills: [
                { name: 'React', icon: '⚛️' },
                { name: 'TypeScript', icon: '🔷' },
                { name: 'Google OAuth', icon: '🔐' },
                { name: 'REST API', icon: '🔌' },
            ],
            highlights: [
                'Google 이메일 연동을 통한 관리자 인증 시스템 구현',
                '관리자 게시글 작성/수정/삭제 기능 개발',
                '사용자 게시글 검사 및 확인 시스템 구현',
            ],
            review: 'Google OAuth를 연동하여 안전한 관리자 인증 시스템을 구축했습니다. 관리자가 앱 콘텐츠를 효율적으로 관리할 수 있도록 직관적인 CMS를 설계하고 구현했으며, 앱과 웹을 함께 개발하면서 전체 서비스 아키텍처를 이해하고 효율적인 API 설계의 중요성을 경험했습니다.',
        },
    ];

    const learningProjects = [
        {
            title: '자동차 사고 다발 지역 조회',
            description: '그룹 프로젝트 (4인, 조장)',
            skills: 'React, Recharts, Kakao Map API, 공공데이터 API',
            link: 'https://bangmim.github.io/projectIT/',
            review: '4인 그룹 프로젝트의 조장을 맡아 팀원들과 역할을 분담하고 일정을 관리했습니다. 공공데이터 포털의 교통사고 데이터를 활용하여 Recharts로 시각화하고, Kakao Map API를 연동하여 지역별 사고 다발 지역을 지도에 표시했습니다. 협업과 외부 API 연동 경험을 쌓을 수 있었습니다.',
        },
    ];

    return (
        <div className="animate-slide-up">
            {/* 실무 프로젝트 */}
            <div className="mb-16">
                <h1 className="text-3xl font-bold text-gray-900 mb-8 pb-4 border-b-2 border-gray-900 flex items-center gap-2">
                    <span>💼</span>
                    실무 프로젝트
                </h1>
                <div className="space-y-16">
                    {projects.map((project) => (
                        <div key={project.id} className="section">
                            {/* 헤더 */}
                            <div className="mb-6">
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{project.title}</h2>
                                <h3 className="text-xl text-gray-600 font-medium">{project.subtitle}</h3>
                            </div>

                            {/* 설명 */}
                            <div className="mb-6">
                                <p className="text-lg text-gray-700 leading-relaxed mb-4">{project.description}</p>

                                {/* 주요 기능 */}
                                {project.highlights && (
                                    <div className="mt-6">
                                        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                                            주요 개발 기능
                                        </h4>
                                        <ul className="space-y-2">
                                            {project.highlights.map((highlight, index) => (
                                                <li key={index} className="flex items-start gap-2 text-gray-700">
                                                    <span className="text-gray-900 mt-1">•</span>
                                                    <span>{highlight}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>

                            {/* 기술 스택 */}
                            <div className="mb-6">
                                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                                    Tech Stack
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {project.skills.map((skill, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-800 font-medium hover:bg-gray-200 transition-colors duration-200"
                                        >
                                            <span className="text-lg">{skill.icon}</span>
                                            <span>{skill.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* 프로젝트 회고 */}
                            <div className="p-6 bg-blue-50 border-l-4 border-blue-600">
                                <h4 className="text-blue-900 font-semibold mb-2 flex items-center gap-2">
                                    <span>💭</span>
                                    프로젝트 회고
                                </h4>
                                <p className="text-gray-800 leading-relaxed">{project.review}</p>
                            </div>

                            {/* 비디오 */}
                            {project.video && (
                                <div className="mt-6">
                                    <h4 className="text-lg font-semibold text-gray-900 mb-3 text-center">구현 영상</h4>
                                    <div className="overflow-hidden">
                                        <ReactPlayer
                                            url={project.video}
                                            width="100%"
                                            height="400px"
                                            playing={false}
                                            muted={false}
                                            controls={true}
                                            loop={true}
                                        />
                                    </div>
                                </div>
                            )}

                            {/* 링크 */}
                            {project.link && (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-minimal inline-flex items-center gap-2 mt-6"
                                >
                                    <span>프로젝트 보기</span>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                                        />
                                    </svg>
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* 학습 프로젝트 */}
            <div className="section pt-16">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <span>📚</span>
                    학습 프로젝트
                </h2>
                <p className="text-gray-600 mb-6">프론트엔드 개발 학습 과정에서 진행한 프로젝트입니다.</p>
                <div className="space-y-6">
                    {learningProjects.map((project, index) => (
                        <div
                            key={index}
                            className="p-6 border-l-4 border-gray-400 hover:border-gray-900 transition-colors duration-200 bg-gray-50"
                        >
                            <h3 className="font-bold text-gray-900 mb-2 text-lg">{project.title}</h3>
                            <p className="text-sm text-blue-600 font-medium mb-3">{project.description}</p>
                            <p className="text-sm text-gray-600 mb-4">{project.skills}</p>
                            {project.review && (
                                <p className="text-sm text-gray-700 leading-relaxed mb-4 p-4 bg-white border-l-2 border-gray-300">
                                    {project.review}
                                </p>
                            )}
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800 font-medium"
                            >
                                프로젝트 보기 →
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
