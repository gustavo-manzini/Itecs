import { useEffect } from "react";

const GoogleReviews = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://static.elfsight.com/platform/platform.js';
        script.defer = true;
        document.body.appendChild(script);
    }, []);

    return(
        <div className="google-reviews-widget">
            <div className="elfsight-app-4c77a6f9-3bcb-49d8-8a86-bc74c2ce4249" data-elfsight-app-lazy></div>
        </div>
    );
};

export default GoogleReviews