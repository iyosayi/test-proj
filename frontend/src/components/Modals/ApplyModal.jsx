import ModalBase from "./ModalBase";

const ApplyModal = () => {
  return (
    <ModalBase>
      <div className="flex">
        <div className="bg-modal-infoBackground w-1/3 p-6">
          <h4 className="text-gray-500 mb-2">Apply To</h4>
          <div className="flex gap-2 items-center">
            <div className="w-12 h-12">
              <img src="https://photos.angel.co/startups/i/5001845-166baf15b842a06817010b6dc196fda3-medium_jpg.jpg?buster=1582753841" />
            </div>
            <p>CareerMove</p>
          </div>
        </div>
        <div className="w-full p-6 space-y-3">
          <h4 className="text-sm">YOUR APPLICATION</h4>
          <hr />
          <p>Andrew Glago</p>
          <p className="text-sm">
            Let them know why you're a good fit for this scholarship.
          </p>
          <textarea
            className="w-full border py-3 px-4"
            placeholder="Write a note here."
          />
          <div className="w-full flex justify-end gap-4">
            <button>Cancel</button>
            <button
              type="submit"
              className="bg-overlay py-3 px-14 rounded text-white hover:opacity-80 transition-all ease-in-out duration-300"
            >
              Send Application
            </button>
          </div>
        </div>
      </div>
    </ModalBase>
  );
};

export default ApplyModal;
