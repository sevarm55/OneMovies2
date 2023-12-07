import './SliderDots.css'

const SliderDots = ({ index, currentIndex, setCurrentIndex }) => {
    
    const handleDotClick = () => {
        setCurrentIndex(index)
    }

    return (
        <>
            <div
                onClick={handleDotClick}
                className={`dots ${currentIndex === index ? 'activeDot' : ''}`}
            ></div>
        </>
    )
}

export default SliderDots
