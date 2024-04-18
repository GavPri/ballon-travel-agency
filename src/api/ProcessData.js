import {useState, useEffect} from 'react'

const ProcessData = (data) => {
    const [processedData, setProcessedData] = useState(null);

    useEffect(() => {
        setProcessedData(data)

        return processedData;
    }, [data])
}

export default ProcessData;