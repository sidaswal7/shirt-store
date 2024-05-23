import React, { useRef } from "react";

const ShirtForm = () => {
  const shirtRef = useRef("");
  const descriptionRef = useRef("");
  const priceRef = useRef("");
  const largeSizeRef = useRef("");
  const medSizeRef = useRef("");
  const smallSizeRef = useRef("");

  const formHandler = (event) => {
    event.preventDefault();
    const enteredShirtName = shirtRef.current.value;
    const enteredDescription = descriptionRef.current.value;
    const enteredPrice = priceRef.current.value;
    const enteredLargeSize = largeSizeRef.current.value;
    const enteredMedSize = medSizeRef.current.value;
    const enteredSmallSize = smallSizeRef.current.value;

    const shirtDetails = {
      enteredShirtName,
      enteredDescription,
      enteredPrice,
      enteredLargeSize,
      enteredMedSize,
      enteredSmallSize,
    };

    (async function submitDetails(){
        const response = await fetch('https://shirt-app-6016c-default-rtdb.firebaseio.com/shirtData.json',{
            method: 'POST',
            body: JSON.stringify(shirtDetails),
            headers:{
                'Content-Type':'application/json'
            }
        })
        const data = await response.json();
        console.log(data);
    })();
  };

  return (
    <div className="flex justify-center items-center my-6">
      <form
        onSubmit={formHandler}
        className="border-2 border-green-600 p-8 rounded-lg shadow-md"
      >
        <div className="mb-2">
          <label htmlFor="shirtName" className="mr-4 font-medium text-lg">
            Shirt Name:{" "}
          </label>
          <input
            type="text"
            id="shirtName"
            ref={shirtRef}
            className="px-4 py-1 border border-slate-500"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="description" className="mr-4 font-medium text-lg">
            Description:{" "}
          </label>
          <input
            type="text"
            id="description"
            ref={descriptionRef}
            className="px-4 py-1 border border-slate-500"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="price" className="mr-4 font-medium text-lg">
            Shirt Price:{" "}
          </label>
          <input
            type="number"
            id="price"
            ref={priceRef}
            className="px-4 py-1 border border-slate-500"
          />
        </div>
        <div className="my-4">
          <label htmlFor="largeSize" className="mr-4 font-medium text-lg">
            L:{" "}
          </label>
          <input
            type="number"
            id="largeSize"
            ref={largeSizeRef}
            className="px-4 py-1 border border-slate-500 w-20 mr-2"
          />
          <label htmlFor="medSize" className="mr-4 font-medium text-lg">
            M:{" "}
          </label>
          <input
            type="number"
            id="medSize"
            ref={medSizeRef}
            className="px-4 py-1 border border-slate-500 w-20 mr-2"
          />
          <label htmlFor="smallSize" className="mr-4 font-medium text-lg">
            S:{" "}
          </label>
          <input
            type="number"
            id="smallSize"
            ref={smallSizeRef}
            className="px-4 py-1 border border-slate-500 w-20"
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="p-2 bg-green-600 hover:bg-green-700 rounded shadow-sm text-white"
          >
            ADD PRODUCT
          </button>
        </div>
      </form>
    </div>
  );
};

export default ShirtForm;
