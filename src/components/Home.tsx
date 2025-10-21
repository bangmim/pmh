import React, { useState } from 'react';

interface CarouselSlide {
    image: string;
    title: string;
    position: 'left' | 'right' | 'center';
}

export default function Home() {
    const [index, setIndex] = useState(0);

    const slides: CarouselSlide[] = [
        {
            image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80',
            title: '협업하는',
            position: 'left',
        },
        {
            image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80',
            title: '문제를 해결하는',
            position: 'right',
        },
        {
            image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&q=80',
            title: '끊임없이 학습하는',
            position: 'center',
        },
    ];

    const handlePrevious = () => {
        setIndex((prev) => Math.max(0, prev - 1));
    };

    const handleNext = () => {
        setIndex((prev) => Math.min(slides.length - 1, prev + 1));
    };

    const getTextAlignment = (position: 'left' | 'right' | 'center') => {
        switch (position) {
            case 'left':
                return 'text-left';
            case 'right':
                return 'text-right';
            case 'center':
                return 'text-center';
        }
    };

    return (
        <div className="space-y-12 animate-slide-up">
            {/* 모바일 프로필 */}
            <div className="md:hidden text-center mb-12">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-6">
                    <img
                        src="https://bangmim.github.io/pmh/img/pmh.jpg"
                        alt="박미현"
                        className="w-full h-full object-cover"
                    />
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">박미현</h1>
                <p className="text-xl text-gray-600 font-medium mb-1">Frontend Developer</p>
                <p className="text-sm text-gray-500">React Native · React · 2023.10 - Present</p>
            </div>

            {/* 캐러셀 */}
            <div className="relative overflow-hidden mb-12">
                <div
                    className="flex transition-transform duration-500 ease-out"
                    style={{ transform: `translateX(-${index * 100}%)` }}
                >
                    {slides.map((slide, i) => (
                        <div key={i} className="w-full flex-shrink-0 relative">
                            <div className="aspect-[16/9] overflow-hidden">
                                <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                            <div className="absolute inset-0 flex items-end p-8">
                                <h2
                                    className={`
                                        w-full text-2xl md:text-3xl font-bold text-white
                                        ${getTextAlignment(slide.position)}
                                    `}
                                >
                                    {slide.title}
                                </h2>
                            </div>
                        </div>
                    ))}
                </div>

                {/* 네비게이션 버튼 */}
                {index > 0 && (
                    <button
                        onClick={handlePrevious}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-all duration-200 active:scale-95"
                        aria-label="Previous slide"
                    >
                        <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                )}

                {index < slides.length - 1 && (
                    <button
                        onClick={handleNext}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-all duration-200 active:scale-95"
                        aria-label="Next slide"
                    >
                        <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                )}

                {/* 인디케이터 */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {slides.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setIndex(i)}
                            className={`
                                w-2 h-2 rounded-full transition-all duration-200
                                ${i === index ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/75'}
                            `}
                            aria-label={`Go to slide ${i + 1}`}
                        />
                    ))}
                </div>
            </div>

            {/* 데스크톱 인트로 텍스트 */}
            <div className="hidden md:block text-center py-12">
                <p className="text-2xl text-gray-600 font-semibold mb-3">프론트엔드 개발자</p>
                <h2 className="text-4xl font-bold text-gray-900">박미현 입니다</h2>
            </div>
        </div>
    );
}
