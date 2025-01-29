const Review = ({ heading, stars, text }: { heading: string, stars: number, text: string }) => {
    const revStars = [];  // array of stars

    // adding stars to the array
    for (let i = 0; i < stars; i++) {
        revStars.push(<span key={i} className="star filled">&#9733;</span>);
    }


    return (
        <div className="review">
            <div className="review-header">
                <h3 className="review-heading">{heading}</h3>
                <div className="stars">
                    {revStars}
                </div>
            </div>
            <p className="review-text">{text}</p>
        </div>
    );
};

export default Review;
