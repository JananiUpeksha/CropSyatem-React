function Staff() {
    return (
        <div className="container" style={{ marginTop: '20px' }}>
            {/* Card Section */}
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            Featured
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="row">
                                    {/* First Column: 6 out of 12 */}
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label htmlFor="inputField4" className="form-label">Select Staff</label>
                                            <select className="form-select" id="inputField4">
                                                <option value="">Select an ID</option>
                                                <option value="option1">Option 1</option>
                                                <option value="option2">Option 2</option>
                                                <option value="option3">Option 3</option>
                                            </select>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="inputField1" className="form-label">First Name</label>
                                            <input type="text" className="form-control" id="inputField1"/>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="inputField1" className="form-label">Address</label>
                                            <input type="text" className="form-control" id="inputField1"/>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="inputField3" className="form-label">Contact</label>
                                            <input type="text" className="form-control" id="inputField3"/>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="startDate" className="form-label">Start Date</label>
                                            <input type="date" className="form-control" id="startDate"/>
                                        </div>
                                    </div>

                                    {/* Second Column: 6 out of 12 */}
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label htmlFor="inputField2" className="form-label">Search</label>
                                            <button type="button" className="btn btn-primary w-100"
                                                    id="inputField2">Search
                                            </button>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="inputField2" className="form-label">Last Name</label>
                                            <input type="text" className="form-control" id="inputField2"/>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="inputField2" className="form-label">E-mail</label>
                                            <input type="text" className="form-control" id="inputField2"/>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="endDate" className="form-label">Birth Day</label>
                                            <input type="date" className="form-control" id="endDate"/>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="inputField6" className="form-label">Role</label>
                                            <select className="form-select" id="inputField6">
                                                <option value="">Select an Option</option>
                                                <option value="optionA">Option A</option>
                                                <option value="optionB">Option B</option>
                                                <option value="optionC">Option C</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                {/* Buttons */}
                                <div className="d-flex justify-content-center gap-3 mt-3">
                                    <button type="submit" className="btn btn-primary">Save</button>
                                    <button type="button" className="btn btn-secondary">Clear</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Table Below the Card */}
            <div className="row mt-4">
                <div className="col-12">
                    <div className="table-responsive">
                        <table className="table table-striped table-hover w-100">
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Username</th>
                                <th scope="col">Email</th>
                                <th scope="col">Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>John</td>
                                <td>Doe</td>
                                <td>@johndoe</td>
                                <td>johndoe@example.com</td>
                                <td>
                                    <button className="btn btn-sm btn-warning mx-2">Edit</button>
                                    <button className="btn btn-sm btn-danger mx-2">Delete</button>
                                </td>
                            </tr>
                            {/* More rows... */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Staff;
