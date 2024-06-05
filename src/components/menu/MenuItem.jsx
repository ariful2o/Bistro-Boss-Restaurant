
export default function MenuItem({ menu }) {
    const { recipe, category, price, name, image } = menu
    const imgStyle = {
        "width": "118px",
        "height": "104px",
        "borderRadius": "0px 200px 200px 200px",
        "background": '#D9D9D9',
    }

    return (
        <div className="flex justify-center gap-5 shadow-lg px-4">
            <img style={imgStyle} src={image} alt="" />
            <div className="">
                <h3m className="text-2xl font-bold">{name}        -------------------</h3m>
                <p>{recipe}</p>
            </div>
            <p className="text-xl text-orange-600"> ${price}</p>
        </div>
    )
}
