import './Banner.css';
import { Swords } from 'lucide-react';

const WORDS = ['PODER', 'DISCIPLINA', 'AMOR', 'RESPETO', 'PERSEVERANCIA'];

const BannerGroup = () => (
    <div className="banner-content">
        {Array.from({ length: 4 }).map((_, g) => (
            <span className="banner-group" key={g}>
                {WORDS.map((w) => (
                    <span className="banner-word" key={w}>
                        {w}
                        <Swords size={20} className="banner-icon" aria-hidden="true" />
                    </span>
                ))}
            </span>
        ))}
    </div>
);

const Banner = () => {
    return (
        <div className="infinite-banner">
            <div className="banner-track">
                <BannerGroup />
                <BannerGroup />
            </div>
        </div>
    );
};

export default Banner;
