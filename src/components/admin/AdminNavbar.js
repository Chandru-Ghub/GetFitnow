import React from 'react'

const AdminNavbar = ({user}) => {
  return (
    <div>
            <div className="sec2">
                    <div className="topNav">
                      
                            <div className="flogo">
                                        <h2>
                                            GETFit
                                            <span class="material-symbols-outlined dumble">
                                            exercise
                                            </span>
                                        </h2>
                            </div>
                   

                            <div className="notify">
                                    <span class="material-symbols-outlined">
                                    notifications
                                    </span>

                                    <span class="material-symbols-outlined">
                                    mail
                                    </span>

                                    <span class="material-symbols-outlined">
                                    account_circle
                                    </span>
                            </div>

                    </div>
             </div>
             
    </div>
  )
}

export default AdminNavbar