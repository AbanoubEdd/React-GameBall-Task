import React from 'react'

function Filtration(props) {



    

  return (
    

    <div className="div-block-8">
    <div className="filter_sort_number">
        <div className="form-block w-form">
            <form id="email-form" name="email-form" method="get"
                className="form">
                <div className="div-block-15">
                    <div className="div-block-14">
                        <div className="filter">
                            <div className="div-block-9">
                                <img
                                    src="https://uploads-ssl.webflow.com/63a1f0d386f2d45519d77fda/63a2cfd3f2dfbd2ffa63f445_icon_Filter-LoFi_20px.png"
                                    loading="lazy" alt="" /></div>
                            <div className="w-dropdown">
                                <div
                                    className="dropdown-toggle-2 w-dropdown-toggle">
                                    <div>Filter</div>
                                    <select name="" id="" onChange={props.handleFiltration}>
                                        <option>all</option>
                                        <option>active</option>
                                        <option>inactive</option>
                                    </select>
                                </div>
                                
                            </div>

                        </div>
                        <div className="sort">
                            <div className="div-block-9"><img
                                    src="https://uploads-ssl.webflow.com/63a1f0d386f2d45519d77fda/63a2cf74d2ee04d52d80e76b_icon_Sort-LoFi_20px.png"
                                    loading="lazy" alt="" /></div>
                            <div className="w-dropdown">
                                <div
                                    className="dropdown-toggle-2 w-dropdown-toggle">
        
                                    <div>Sort</div>
                                    <select name="" id="">
                                        <option value="" key=""></option>
                                    </select>
                                </div>

                            </div>
                        </div>
                    </div>



                    
                    <div className="search"><input type="text"
                            className="text-field w-input" maxlength="256"
                            name="name" placeholder="Search" id="name" />
                    </div>
                </div>








                <div>
                    <div className="div-block-11">
                        <div className="result-count">
                            <div><span className="result-number">{props.items.length}</span>
                                Challenges</div>
                        </div>
                        <div className="div-block-13">
                            <h5 className="creat-new">Create New Challenge</h5>
                            <div className="div-block-12"><img
                                    src="https://uploads-ssl.webflow.com/63a1f0d386f2d45519d77fda/63a2d61d65af1c75a04ab6d5_icon_Add-LoFi_20px.png"
                                    loading="lazy" alt="" /></div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>


  )
}

export default Filtration