import React from 'react';

const Contact = () => {
    return (
        <div className='container'>
            <div className='py-4'>
                <h4>Contact Page.</h4>
                <form>
                    <div class="form-group">
                        <input type="email" class="form-control" id="exampleInputEmail1" 
                        aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                    <div class="form-group">
                        <input type="password" class="form-control" id="exampleInputPassword1"
                        placeholder="Enter password" />
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}
export default Contact;