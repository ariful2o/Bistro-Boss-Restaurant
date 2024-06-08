import { Parallax } from 'react-parallax';

export default function Cover({ img, title, subTitle }) {
    return (
        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={(`${img}`)}
            bgImageAlt="the dog"
            strength={-200}
            style={{ position: 'relative' }}
        >
            {
                subTitle && <div className="absolute top-1/3 left-[16%] min-w-96 bg-[#15151599] w-[70%] text-center py-20 text-white">
                    <h2 className="text-3xl mb-4 font-bold">{title}</h2>
                    <p>{subTitle}</p>
                </div>
            }
            <div style={{ height: '500px' }} />
        </Parallax>
    )
}
