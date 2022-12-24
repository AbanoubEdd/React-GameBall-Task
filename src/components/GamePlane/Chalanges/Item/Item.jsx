import React from 'react'

function Item() {
  return (
    
    <div role="listitem" class="w-dyn-item">
    <div class="item-container">
      <div class="item-status-container">
        <div>
          <div
            class="item-status w-condition-invisible"
          >
            <div class="active">Active</div>
            <img
              src="https://uploads-ssl.webflow.com/63a1f0d386f2d45519d77fda/63a2d418fa137f6eb43eab1a_Status_Active%20(2).png"
              loading="lazy"
              alt=""
              class="image"
            />
          </div>
          <div class="item-status">
            <div class="inactive">INACTIVE</div>
            <img
              src="https://uploads-ssl.webflow.com/63a1f0d386f2d45519d77fda/63a23326f087ff6aa9c2d0f0_Status_Active%20(1).png"
              loading="lazy"
              alt=""
              class="image inactive"
            />
          </div>
          <div
            fs-cmsfilter-field="status"
            class="chalange-title for-filteration"
          >
            Inactive
          </div>
        </div>
      </div>
      <div class="mession-name-container">
        <div class="item-img-contaain">
          <img
            src="https://uploads-ssl.webflow.com/63a1f0d386f2d45519d77fda/63a230adc8814b5a4017b81e_icon_ChallengeBlank-HiFi_50px.png"
            loading="lazy"
            alt=""
          />
        </div>
        <div>
          <h4 class="item-name">
            Click &amp; Collect 4
          </h4>
          <div class="item-date">
            18/10/2022 2:00
          </div>
        </div>
      </div>
      <p class="item-desc">
        It is a long established fact that a reader
        will be distracted by the readable eye.
      </p>
      <div class="item-grid">
        <div class="grid-div">
          <div class="data-icon">
            <img
              src="https://uploads-ssl.webflow.com/63a1f0d386f2d45519d77fda/63a22501d4ee9390f4d77d31_icon_Frubies-HiFi_20px.png"
              loading="lazy"
              alt=""
            />
          </div>
          <div class="dyn-txt-content">1196</div>
          <div class="dyn-txt-content">Frubies</div>
        </div>
        <div class="grid-div">
          <div class="data-icon">
            <img
              src="https://uploads-ssl.webflow.com/63a1f0d386f2d45519d77fda/63a229574564cb3ea5d35b62_icon_Points_HiFi-S.png"
              loading="lazy"
              alt=""
            />
          </div>
          <div class="dyn-txt-content">1196</div>
          <div class="dyn-txt-content">Points</div>
        </div>
        <div class="grid-div">
          <div class="data-icon">
            <img
              src="https://uploads-ssl.webflow.com/63a1f0d386f2d45519d77fda/63a2296fd5c1330a84c6d5a2_icon_Milestones_HiFi-S.png"
              loading="lazy"
              alt=""
            />
          </div>
          <div class="dyn-txt-content">1196</div>
          <div class="dyn-txt-content">
            Milestones
          </div>
        </div>
        <div class="grid-div thing">
          <div class="data-icon thing">
            <img
              src="https://uploads-ssl.webflow.com/63a1f0d386f2d45519d77fda/63a226f96c4432098ebeb36b_icon_Tag_LoFi-XS.png"
              loading="lazy"
              alt=""
            />
          </div>
          <div class="dyn-txt-content thing">
            The Tiny Thing
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Item