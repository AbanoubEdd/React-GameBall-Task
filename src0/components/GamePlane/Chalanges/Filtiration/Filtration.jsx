import React from 'react'

function Filtration() {
  return (
    

<div class="filter-sort-search-chalange-create">
<div class="filter_sort_number">
  <div
    fs-cmsfilter-element="filters"
    class="form-block w-form"
  >
    <form
      id="email-form"
      name="email-form"
      data-name="Email Form"
      method="get"
      class="form"
    >
      <div class="sort-filter-search">
        <div class="filter-sort">
          <div class="filter">
            <div class="filter-img">
              <img
                src="https://uploads-ssl.webflow.com/63a1f0d386f2d45519d77fda/63a2cfd3f2dfbd2ffa63f445_icon_Filter-LoFi_20px.png"
                loading="lazy"
                alt=""
              />
            </div>
            <div
              data-hover="false"
              data-delay="0"
              class="w-dropdown"
            >
              <div
                class="dropdown-toggle-2 w-dropdown-toggle"
              >
                <div
                  class="icon-filter w-icon-dropdown-toggle"
                ></div>
                <div class="filter-title">Filter</div>
              </div>
              <nav
                class="dropdown-filter-list w-dropdown-list"
              >
                <a
                  fs-cmsfilter-element="reset"
                  href="#"
                  class="filter-item"
                  >Reset</a
                >
                <div
                  class="collection-list-wrapper w-dyn-list"
                >
                  <div
                    role="list"
                    class="w-dyn-items"
                  >
                    <div
                      role="listitem"
                      class="collection-item w-dyn-item"
                    >
                      <label
                        class="radio-button-field w-radio"
                        ><input
                          type="radio"
                          data-name="Radio"
                          id="radio"
                          name="radio"
                          value="Radio"
                          class="w-form-formradioinput radio-button w-radio-input"
                        /><span
                          fs-cmsfilter-field="status"
                          class="filter-item w-form-label"
                          for="radio"
                          >Inactive</span
                        ></label
                      >
                    </div>
                    <div
                      role="listitem"
                      class="collection-item w-dyn-item"
                    >
                      <label
                        class="radio-button-field w-radio"
                        ><input
                          type="radio"
                          data-name="Radio"
                          id="radio"
                          name="radio"
                          value="Radio"
                          class="w-form-formradioinput radio-button w-radio-input"
                        /><span
                          fs-cmsfilter-field="status"
                          class="filter-item w-form-label"
                          for="radio"
                          >Active</span
                        ></label
                      >
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
          <div class="sort">
            <div class="filter-img">
              <img
                src="https://uploads-ssl.webflow.com/63a1f0d386f2d45519d77fda/63a2cf74d2ee04d52d80e76b_icon_Sort-LoFi_20px.png"
                loading="lazy"
                alt=""
              />
            </div>
            <div
              data-hover="false"
              data-delay="0"
              class="w-dropdown"
            >
              <div
                class="dropdown-toggle-2 w-dropdown-toggle"
              >
                <div
                  class="icon-filter w-icon-dropdown-toggle"
                ></div>
                <div class="filter-title">Sort</div>
              </div>
              <nav class="w-dropdown-list">
                <a href="#" class="w-dropdown-link"
                  >Link 1</a
                ><a href="#" class="w-dropdown-link"
                  >Link 2</a
                ><a href="#" class="w-dropdown-link"
                  >Link 3</a
                >
              </nav>
            </div>
          </div>
        </div>
        <div class="search">
          <input
            type="text"
            class="search-field w-input"
            maxlength="256"
            name="name"
            fs-cmsfilter-field="*"
            data-name="Name"
            placeholder="Search"
            id="name"
          />
        </div>
      </div>
      <div class="chalanges-contai">
        <div class="sub-container">
          <div class="result-count">
            <div class="count-text">
              <span
                fs-cmsfilter-element="results-count"
                class="result-number"
                >14</span
              >
              Challenges
            </div>
          </div>
          <div class="create-contain">
            <h5 class="creat-new">
              Create New Challenge
            </h5>
            <div class="create-img">
              <img
                src="https://uploads-ssl.webflow.com/63a1f0d386f2d45519d77fda/63a2d61d65af1c75a04ab6d5_icon_Add-LoFi_20px.png"
                loading="lazy"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </form>
    <div class="w-form-done">
      <div>
        Thank you! Your submission has been received!
      </div>
    </div>
    <div class="w-form-fail">
      <div>
        Oops! Something went wrong while submitting
        the form.
      </div>
    </div>
  </div>
</div>
</div>

  )
}

export default Filtration