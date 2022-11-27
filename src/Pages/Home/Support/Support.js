import React from 'react';
import useTitle from '../../../hooks/useTitle';
import support from '../../../assets/images/support.png';

const Support = () => {
    // Dynamic title using hooks
    useTitle('Support');

    return (
        <div>
            <h1 className="text-5xl text-center font-bold mt-20">Support</h1>
            <div className="hero w-full my-20">
                <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <img className='lg:w-3/4' src={support} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-10">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="Email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <textarea className="textarea textarea-bordered h-44  my-4" placeholder="Leave your query"></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <button className='btn btn-primary'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Support;