import { useEffect, useRef } from "react";
import { WidgetInstance } from 'friendly-challenge';

const FriendlyCaptcha = ({ sitekey }) => {
    const container = useRef();
    const widget = useRef();

    const doneCallback = (solution) => {
        console.log('Captcha was solved. The form can be submitted.');
        console.log(solution);
    }

    const errorCallback = (err) => {
        console.log('There was an error when trying to solve the Captcha.');
        console.log(err);
    }

    useEffect(() => {
        // This function ensures the widget is only initialized once
        const initializeWidget = () => {
            if (container.current && !widget.current) { // Checks if the widget hasn't been initialized yet
                widget.current = new WidgetInstance(container.current, {
                    sitekey: sitekey,
                    startMode: "auto",
                    doneCallback: doneCallback,
                    errorCallback: errorCallback
                });
            }
        };

        initializeWidget();

        return () => {
            if (widget.current) {
                widget.current.reset();
                widget.current = null; // Ensure cleanup sets the widget reference back to null
            }
        };
    }, [sitekey]); // Effect depends on sitekey

    return (
        <div ref={container} className="frc-captcha" />
    );
}

export default FriendlyCaptcha;