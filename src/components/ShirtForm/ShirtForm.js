import React, { useRef } from "react";

const ShirtForm = ()=>{

    const shirtRef = useRef('');
    const descriptionRef = useRef('');
    const priceRef = useRef('');
    const largeSizeRef = useRef('');
    const medSizeRef = useRef('');
    const smallSizeRef = useRef('');

    const formHandler = (event)=>{
        event.preventDefault();
        const enteredShirtName = shirtRef.current.value;
        const enteredDescription = descriptionRef.current.value;
        const enteredPrice = priceRef.current.value;
        const enteredLargeSize = largeSizeRef.current.value;
        const enteredMedSize = medSizeRef.current.value;
        const enteredSmallSize = smallSizeRef.current.value;

        const shirtDetails = {enteredShirtName, enteredDescription, enteredPrice, enteredLargeSize, enteredMedSize, enteredSmallSize};

        console.log(shirtDetails)

    }

    return(
        <div className="flex justify-center items-center mt-6">
            <form onSubmit={formHandler}>
                <div>
                    <label htmlFor="shirtName">Shirt Name: </label>
                    <input type="text" id="shirtName" ref={shirtRef}/>
                </div>
                <div>
                    <label htmlFor="description">Description: </label>
                    <input type="text" id="description" ref={descriptionRef}/>
                </div>
                <div>
                    <label htmlFor="price">Price: </label>
                    <input type="number" id="price" ref={priceRef}/>
                </div>
                <div>
                    <label htmlFor="largeSize">L: </label>
                    <input type="number" id="largeSize" ref={largeSizeRef}/>
                    <label htmlFor="medSize">M: </label>
                    <input type="number" id="medSize" ref={largeSizeRef}/>
                    <label htmlFor="smallSize">S: </label>
                    <input type="number" id="smallSize" ref={smallSizeRef}/>
                </div>
                <div className="flex items-center justify-center">
                    <button type="submit">Add Product</button>
                </div>
            </form>
        </div>
    )
}

export default ShirtForm;