import bannerimg from '../../../../assets/home/banner.jpg'
export default function Banner() {
    return (
        <div className='w-full min-h-96 flex justify-center items-center' style={{ backgroundImage: `url(${bannerimg})` }}>
            <div className="bg-white max-w-5xl space-y-4 text-center px-40 py-20 rounded-md">
                <h2 className="text-2xl font-bold text-black">Bistro Boss</h2>
                <p className="text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
            </div>
        </div>
    )
}
