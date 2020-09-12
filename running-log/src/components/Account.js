import React, { useState } from "react";


export function Runner(props) {
    return (
        <div className="border border rounded p-1 row">
            <div className="col ">
                <div>
                    <b>Name:</b> {props.member.first_name} {props.member.last_name}
                </div>
                <div>
                    <b>Email:</b> {props.member.email}
                </div>
            </div>
        </div>
    )
    export function UpdateFirstName(props) {
        return (
            <div>
                <div>
                    {/* New First Name */}
                    <label htmlFor="first_name">New First Name</label>
                    <form>
                        <input
                            value={props.first_name}
                            onChange={props.handleInputChange}
                            type="text"
                            name="first_name"
                            id="first_name"
                            className="form-control validate"
                            placeholder="First Name"
                        />
                        <br />
                        <button type="button" className="btn btn-info" name="first_name" onClick={props.handleAccountInfoChange}>Update</button>
                    </form>
                </div>
            </div>
        );
    }

    export function UpdateLastName(props) {
        return (
            <div>
                <form>
                    {/* New First Name */}
                    <label htmlFor="last_name">New Last Name</label>
                    <input
                        value={props.last_name}
                        onChange={props.handleInputChange}
                        type="text"
                        name="last_name"
                        id="last_name"
                        className="form-control validate"
                        placeholder="Last Name"
                    />
                </form>
                <br />
                <button type="button" className="btn btn-info" name="last_name" onClick={props.handleAccountInfoChange}>Update</button>
            </div>
        )
    }

    export function UpdateEmail(props) {
        return (
            <div>
                <form>
                    {/* New First Name */}
                    <label htmlFor="email">New Email</label>
                    <input
                        value={props.email}
                        onChange={props.handleInputChange}
                        type="text"
                        name="email"
                        id="email"
                        className="form-control validate"
                        placeholder="Eamil"
                    />
                </form>
                <br />
                <button type="button" className="btn btn-info" name="email" onClick={props.handleAccountInfoChange}>Update</button>
            </div>
        )
    }

    export function UpdatePassword(props) {
        return (
            <div className={props.onSubmitErr}>
                <form>
                    {/* New Password*/}
                    <label htmlFor="password">Old Password</label>
                    <input
                        value={props.old_password}
                        onChange={props.handleInputChange}
                        type="password"
                        name="old_password"
                        id="old_password"
                        className="form-control validate"
                        placeholder="Old Password"
                    />
                    <br />
                    <label htmlFor="password">New Password</label>
                    <input
                        value={props.password}
                        onChange={props.handleInputChange}
                        type="password"
                        name="password"
                        id="password"
                        className="form-control validate"
                        placeholder="New Password"
                    />
                    <br />
                    <label htmlFor="password">Confirm New Password</label>
                    <input
                        value={props.password_confirm}
                        onChange={props.handleInputChange}
                        type="password"
                        name="password_confirm"
                        id="password_confirm"
                        className="form-control validate"
                        placeholder="New Password"
                    />
                    <br />
                </form>
                <button type="button" className="btn btn-info" name="password" onClick={props.handleAccountPasswordChange}>Update</button>
            </div>
        )
    }
}