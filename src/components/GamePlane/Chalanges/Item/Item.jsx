import React from 'react'






function Item(props) {

    const elemActive = (props.item.active)? (
        <div className="div-block-7">        
            <div className="active">Active</div>
            <img
                src="https://uploads-ssl.webflow.com/63a1f0d386f2d45519d77fda/63a2d418fa137f6eb43eab1a_Status_Active%20(2).png"
                loading="lazy" alt="" className="image"
            />
        </div>
    ): (
        <div className="div-block-7 ">
            <div className="inactive">INACTIVE</div>
            <img
                src="https://uploads-ssl.webflow.com/63a1f0d386f2d45519d77fda/63a23326f087ff6aa9c2d0f0_Status_Active%20(1).png"
                loading="lazy" alt=""
                className="image inactive"
            />
        </div>
    )


  return (
    

    <div  className="w-dyn-item">
    <div className="item-container">
        <div className="div-block-6">
            <div>
                {elemActive}
            </div>
        </div>
        <div className="div-block-5">
            <div className="div-block-4"><img
                    src="https://uploads-ssl.webflow.com/63a1f0d386f2d45519d77fda/63a230adc8814b5a4017b81e_icon_ChallengeBlank-HiFi_50px.png"
                    loading="lazy" alt="" /></div>
            <div>
                <h4 className="item-name">{props.item.title}</h4>
                <div className="text-block-3">5/8/2022 2:00</div>
            </div>
        </div>
        <p className="paragraph">{props.item.description}</p>
        <div className="div-block-3">
            <div className="div-block-2">
                <div className="data-icon"><img
                        src="https://uploads-ssl.webflow.com/63a1f0d386f2d45519d77fda/63a22501d4ee9390f4d77d31_icon_Frubies-HiFi_20px.png"
                        loading="lazy" alt="" /></div>
                <div className="text-block">3811</div>
                <div className="text-block">Frubies</div>
            </div>
            <div className="div-block-2">
                <div className="data-icon"><img
                        src="https://uploads-ssl.webflow.com/63a1f0d386f2d45519d77fda/63a229574564cb3ea5d35b62_icon_Points_HiFi-S.png"
                        loading="lazy" alt="" /></div>
                <div className="text-block">3811</div>
                <div className="text-block">Points</div>
            </div>
            <div className="div-block-2">
                <div className="data-icon"><img
                        src="https://uploads-ssl.webflow.com/63a1f0d386f2d45519d77fda/63a2296fd5c1330a84c6d5a2_icon_Milestones_HiFi-S.png"
                        loading="lazy" alt="" /></div>
                <div className="text-block">3811</div>
                <div className="text-block">Milestones</div>
            </div>
            <div className="div-block-2 thing">
                <div className="data-icon thing"><img
                        src="https://uploads-ssl.webflow.com/63a1f0d386f2d45519d77fda/63a226f96c4432098ebeb36b_icon_Tag_LoFi-XS.png"
                        loading="lazy" alt="" /></div>
                <div className="text-block thing">The Big Thing
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Item