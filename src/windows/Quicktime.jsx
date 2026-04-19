import React, { useMemo, useEffect, useState } from 'react'
import WindowWrapper from '@hoc/WindowWrapper';
import WindowControls from '@components/WindowControls';
import useWindowStore from '@store/window';

const Quicktime = () => {
    const { windows } = useWindowStore();
    const file = windows["quicktimeplayer"]?.data?.file;
    const [url, setUrl] = useState(null);
    useEffect(() => {
        if (!file) {
            setUrl(null);
            return;
        }
        const objUrl = URL.createObjectURL(file);
        setUrl(objUrl);
        return () => URL.revokeObjectURL(objUrl);
        
    }, [file]);
    return (
    <>
        <div className="window-header">
            <WindowControls target="quicktimeplayer" />
            <h2>Quicktime Player</h2>
        </div>
        <div className="content flex-1 min-h-0 bg-black flex items-center justify-center">
            {file ? (
                <video src={url} controls autoPlay className="max-w-full max-h-full object-contain"></video>
            ) : (
                <div className="font-l p-4">Video file needed.</div>
            )}
        </div>
    </>
  )
}

const QuicktimeWindow = WindowWrapper(Quicktime, 'quicktimeplayer');

export default QuicktimeWindow;