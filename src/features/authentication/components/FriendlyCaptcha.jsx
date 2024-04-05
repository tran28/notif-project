import { useCallback, useEffect, useRef } from "react";
import { WidgetInstance } from 'friendly-challenge';

const FriendlyCaptcha = ({ sitekey, setIsCaptchaSolved }) => {
    const container = useRef();
    const widget = useRef();

    const doneCallback = useCallback((solution) => {
        setIsCaptchaSolved(true);
    }, [setIsCaptchaSolved]);

    const errorCallback = useCallback((err) => {
        console.log('There was an error when trying to solve the Captcha:', err);
    }, []);

    useEffect(() => {
        if (!widget.current && container.current) {
            widget.current = new WidgetInstance(container.current, {
                startMode: "none",
                doneCallback,
                errorCallback,
            });
        }

        return () => {
            if (widget.current !== undefined) widget.current.reset();
        }
    }, [container, doneCallback, errorCallback]);

    return (
        <div ref={container} className="text-sm font-light flex py-2" data-sitekey={sitekey} />
    );
}

export default FriendlyCaptcha;