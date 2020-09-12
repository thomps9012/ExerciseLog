import React from "react";

export function CreateRun(props) {
    return(
        <div>
            <div className="modal-body">
                {/* Run Length */}
                <div className="my-2">
                    <label htmlFor="Length">Run Length</label>
                    <input
                        value={props.Length}
                        onChange = {props.handleInputChange}
                        type="number"
                        className="form-control validate"
                        required/>
                </div>
                {/* Run Time */}
                <div className="my-2">
                    <label htmlFor="Time">Run Time</label>
                    <input
                        value={props.Time}
                        onChange = {props.handleInputChange}
                        type="number"
                        className="form-control validate"
                        required/>
                </div>
            {/* Submit Button */}
            <button type="submit" onClick={props.handleCreateSubmit} className="btn btn-deep-orange">Submit</button>
            </div>
        </div>)
}