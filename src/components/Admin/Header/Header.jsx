const Header = () => {
  return (
    <>
      <div className="mobile-menu md:hidden">
        <div className="mobile-menu-bar">
          <a href="" className="flex mr-auto">
            <img
              alt="Midone - HTML Admin Template"
              className="w-6"
              src="../../../images/logo.svg"
            />
          </a>
          <a href="javascript:;" className="mobile-menu-toggler">
            <i
              data-lucide="bar-chart-2"
              className="w-8 h-8 text-white transform -rotate-90"
            ></i>
          </a>
        </div>
        <div className="scrollable">
          <a href="javascript:;" className="mobile-menu-toggler">
            <i
              data-lucide="x-circle"
              className="w-8 h-8 text-white transform -rotate-90"
            ></i>
          </a>
          <ul className="scrollable__content py-2">
            <li>
              <a href="javascript:;.html" className="menu menu--active">
                <div className="menu__icon">
                  <i data-lucide="home"></i>
                </div>
                <div className="menu__title">
                  Dashboard
                  <i
                    data-lucide="chevron-down"
                    className="menu__sub-icon transform rotate-180"
                  ></i>
                </div>
              </a>
              <ul className="menu__sub-open">
                <li>
                  <a
                    href="side-menu-light-dashboard-overview-1.html"
                    className="menu"
                  >
                    <div className="menu__icon">
                      <i data-lucide="activity"></i>
                    </div>
                    <div className="menu__title"> Overview 1 </div>
                  </a>
                </li>
                <li>
                  <a
                    href="side-menu-light-dashboard-overview-2.html"
                    className="menu"
                  >
                    <div className="menu__icon">
                      <i data-lucide="activity"></i>
                    </div>
                    <div className="menu__title"> Overview 2 </div>
                  </a>
                </li>
                <li>
                  <a
                    href="side-menu-light-dashboard-overview-3.html"
                    className="menu"
                  >
                    <div className="menu__icon">
                      <i data-lucide="activity"></i>
                    </div>
                    <div className="menu__title"> Overview 3 </div>
                  </a>
                </li>
                <li>
                  <a href="index.html" className="menu menu--active">
                    <div className="menu__icon">
                      <i data-lucide="activity"></i>
                    </div>
                    <div className="menu__title"> Overview 4 </div>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="javascript:;" className="menu">
                <div className="menu__icon">
                  <i data-lucide="box"></i>
                </div>
                <div className="menu__title">
                  Menu Layout
                  <i data-lucide="chevron-down" className="menu__sub-icon "></i>
                </div>
              </a>
              <ul className="">
                <li>
                  <a
                    href="side-menu-light-dashboard-overview-1.html"
                    className="menu"
                  >
                    <div className="menu__icon">
                      <i data-lucide="activity"></i>
                    </div>
                    <div className="menu__title"> Side Menu </div>
                  </a>
                </li>
                <li>
                  <a
                    href="simple-menu-light-dashboard-overview-1.html"
                    className="menu"
                  >
                    <div className="menu__icon">
                      <i data-lucide="activity"></i>
                    </div>
                    <div className="menu__title"> Simple Menu </div>
                  </a>
                </li>
                <li>
                  <a
                    href="top-menu-light-dashboard-overview-1.html"
                    className="menu"
                  >
                    <div className="menu__icon">
                      <i data-lucide="activity"></i>
                    </div>
                    <div className="menu__title"> Top Menu </div>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="javascript:;" className="menu">
                <div className="menu__icon">
                  <i data-lucide="shopping-bag"></i>
                </div>
                <div className="menu__title">
                  E-Commerce
                  <i data-lucide="chevron-down" className="menu__sub-icon "></i>
                </div>
              </a>
              <ul className="">
                <li>
                  <a href="side-menu-light-categories.html" className="menu">
                    <div className="menu__icon">
                      <i data-lucide="activity"></i>
                    </div>
                    <div className="menu__title"> Categories </div>
                  </a>
                </li>
                <li>
                  <a href="side-menu-light-add-product.html" className="menu">
                    <div className="menu__icon">
                      <i data-lucide="activity"></i>
                    </div>
                    <div className="menu__title"> Add Product </div>
                  </a>
                </li>
                <li>
                  <a href="javascript:;" className="menu">
                    <div className="menu__icon">
                      <i data-lucide="activity"></i>
                    </div>
                    <div className="menu__title">
                      Products
                      <i
                        data-lucide="chevron-down"
                        className="menu__sub-icon "
                      ></i>
                    </div>
                  </a>
                  <ul className="">
                    <li>
                      <a
                        href="side-menu-light-product-list.html"
                        className="menu"
                      >
                        <div className="menu__icon">
                          <i data-lucide="zap"></i>
                        </div>
                        <div className="menu__title">Product List</div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="side-menu-light-product-grid.html"
                        className="menu"
                      >
                        <div className="menu__icon">
                          <i data-lucide="zap"></i>
                        </div>
                        <div className="menu__title">Product Grid</div>
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="javascript:;" className="menu">
                    <div className="menu__icon">
                      <i data-lucide="activity"></i>
                    </div>
                    <div className="menu__title">
                      Transactions
                      <i
                        data-lucide="chevron-down"
                        className="menu__sub-icon "
                      ></i>
                    </div>
                  </a>
                  <ul className="">
                    <li>
                      <a
                        href="side-menu-light-transaction-list.html"
                        className="menu"
                      >
                        <div className="menu__icon">
                          <i data-lucide="zap"></i>
                        </div>
                        <div className="menu__title">Transaction List</div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="side-menu-light-transaction-detail.html"
                        className="menu"
                      >
                        <div className="menu__icon">
                          <i data-lucide="zap"></i>
                        </div>
                        <div className="menu__title">Transaction Detail</div>
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="javascript:;" className="menu">
                    <div className="menu__icon">
                      <i data-lucide="activity"></i>
                    </div>
                    <div className="menu__title">
                      Sellers
                      <i
                        data-lucide="chevron-down"
                        className="menu__sub-icon "
                      ></i>
                    </div>
                  </a>
                  <ul className="">
                    <li>
                      <a
                        href="side-menu-light-seller-list.html"
                        className="menu"
                      >
                        <div className="menu__icon">
                          <i data-lucide="zap"></i>
                        </div>
                        <div className="menu__title">Seller List</div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="side-menu-light-seller-detail.html"
                        className="menu"
                      >
                        <div className="menu__icon">
                          <i data-lucide="zap"></i>
                        </div>
                        <div className="menu__title">Seller Detail</div>
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="side-menu-light-reviews.html" className="menu">
                    <div className="menu__icon">
                      <i data-lucide="activity"></i>
                    </div>
                    <div className="menu__title"> Reviews </div>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="side-menu-light-inbox.html" className="menu">
                <div className="menu__icon">
                  <i data-lucide="inbox"></i>
                </div>
                <div className="menu__title"> Inbox </div>
              </a>
            </li>
            <li>
              <a href="side-menu-light-file-manager.html" className="menu">
                <div className="menu__icon">
                  <i data-lucide="hard-drive"></i>
                </div>
                <div className="menu__title"> File Manager </div>
              </a>
            </li>
            <li>
              <a href="side-menu-light-point-of-sale.html" className="menu">
                <div className="menu__icon">
                  <i data-lucide="credit-card"></i>
                </div>
                <div className="menu__title"> Point of Sale </div>
              </a>
            </li>
            <li>
              <a href="side-menu-light-chat.html" className="menu">
                <div className="menu__icon">
                  <i data-lucide="message-square"></i>
                </div>
                <div className="menu__title"> Chat </div>
              </a>
            </li>
            <li>
              <a href="side-menu-light-post.html" className="menu">
                <div className="menu__icon">
                  <i data-lucide="file-text"></i>
                </div>
                <div className="menu__title"> Post </div>
              </a>
            </li>
            <li>
              <a href="side-menu-light-calendar.html" className="menu">
                <div className="menu__icon">
                  <i data-lucide="calendar"></i>
                </div>
                <div className="menu__title"> Calendar </div>
              </a>
            </li>
            <li className="menu__devider my-6"></li>
            <li>
              <a href="javascript:;" className="menu">
                <div className="menu__icon">
                  <i data-lucide="edit"></i>
                </div>
                <div className="menu__title">
                  Crud
                  <i data-lucide="chevron-down" className="menu__sub-icon "></i>
                </div>
              </a>
              <ul className="">
                <li>
                  <a
                    href="side-menu-light-crud-data-list.html"
                    className="menu"
                  >
                    <div className="menu__icon">
                      <i data-lucide="activity"></i>
                    </div>
                    <div className="menu__title"> Data List </div>
                  </a>
                </li>
                <li>
                  <a href="side-menu-light-crud-form.html" className="menu">
                    <div className="menu__icon">
                      <i data-lucide="activity"></i>
                    </div>
                    <div className="menu__title"> Form </div>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="javascript:;" className="menu">
                <div className="menu__icon">
                  <i data-lucide="users"></i>
                </div>
                <div className="menu__title">
                  Users
                  <i data-lucide="chevron-down" className="menu__sub-icon "></i>
                </div>
              </a>
              <ul className="">
                <li>
                  <a
                    href="side-menu-light-users-layout-1.html"
                    className="menu"
                  >
                    <div className="menu__icon">
                      <i data-lucide="activity"></i>
                    </div>
                    <div className="menu__title"> Layout 1 </div>
                  </a>
                </li>
                <li>
                  <a
                    href="side-menu-light-users-layout-2.html"
                    className="menu"
                  >
                    <div className="menu__icon">
                      <i data-lucide="activity"></i>
                    </div>
                    <div className="menu__title"> Layout 2 </div>
                  </a>
                </li>
                <li>
                  <a
                    href="side-menu-light-users-layout-3.html"
                    className="menu"
                  >
                    <div className="menu__icon">
                      <i data-lucide="activity"></i>
                    </div>
                    <div className="menu__title"> Layout 3 </div>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="javascript:;" className="menu">
                <div className="menu__icon">
                  <i data-lucide="trello"></i>
                </div>
                <div className="menu__title">
                  Profile
                  <i data-lucide="chevron-down" className="menu__sub-icon "></i>
                </div>
              </a>
              <ul className="">
                <li>
                  <a
                    href="side-menu-light-profile-overview-1.html"
                    className="menu"
                  >
                    <div className="menu__icon">
                      <i data-lucide="activity"></i>
                    </div>
                    <div className="menu__title"> Overview 1 </div>
                  </a>
                </li>
                <li>
                  <a
                    href="side-menu-light-profile-overview-2.html"
                    className="menu"
                  >
                    <div className="menu__icon">
                      <i data-lucide="activity"></i>
                    </div>
                    <div className="menu__title"> Overview 2 </div>
                  </a>
                </li>
                <li>
                  <a
                    href="side-menu-light-profile-overview-3.html"
                    className="menu"
                  >
                    <div className="menu__icon">
                      <i data-lucide="activity"></i>
                    </div>
                    <div className="menu__title"> Overview 3 </div>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="javascript:;" className="menu">
                <div className="menu__icon">
                  <i data-lucide="layout"></i>
                </div>
                <div className="menu__title">
                  Pages
                  <i data-lucide="chevron-down" className="menu__sub-icon "></i>
                </div>
              </a>
              <ul className="">
                <li>
                  <a href="javascript:;" className="menu">
                    <div className="menu__icon">
                      <i data-lucide="activity"></i>
                    </div>
                    <div className="menu__title">
                      Wizards
                      <i
                        data-lucide="chevron-down"
                        className="menu__sub-icon "
                      ></i>
                    </div>
                  </a>
                  <ul className="">
                    <li>
                      <a
                        href="side-menu-light-wizard-layout-1.html"
                        className="menu"
                      >
                        <div className="menu__icon">
                          <i data-lucide="zap"></i>
                        </div>
                        <div className="menu__title">Layout 1</div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="side-menu-light-wizard-layout-2.html"
                        className="menu"
                      >
                        <div className="menu__icon">
                          <i data-lucide="zap"></i>
                        </div>
                        <div className="menu__title">Layout 2</div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="side-menu-light-wizard-layout-3.html"
                        className="menu"
                      >
                        <div className="menu__icon">
                          <i data-lucide="zap"></i>
                        </div>
                        <div className="menu__title">Layout 3</div>
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="javascript:;" className="menu">
                    <div className="menu__icon">
                      <i data-lucide="activity"></i>
                    </div>
                    <div className="menu__title">
                      Blog
                      <i
                        data-lucide="chevron-down"
                        className="menu__sub-icon "
                      ></i>
                    </div>
                  </a>
                  <ul className="">
                    <li>
                      <a
                        href="side-menu-light-blog-layout-1.html"
                        className="menu"
                      >
                        <div className="menu__icon">
                          <i data-lucide="zap"></i>
                        </div>
                        <div className="menu__title">Layout 1</div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="side-menu-light-blog-layout-2.html"
                        className="menu"
                      >
                        <div className="menu__icon">
                          <i data-lucide="zap"></i>
                        </div>
                        <div className="menu__title">Layout 2</div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="side-menu-light-blog-layout-3.html"
                        className="menu"
                      >
                        <div className="menu__icon">
                          <i data-lucide="zap"></i>
                        </div>
                        <div className="menu__title">Layout 3</div>
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="javascript:;" className="menu">
                    <div className="menu__icon">
                      <i data-lucide="activity"></i>
                    </div>
                    <div className="menu__title">
                      Pricing
                      <i
                        data-lucide="chevron-down"
                        className="menu__sub-icon "
                      ></i>
                    </div>
                  </a>
                  <ul className="">
                    <li>
                      <a
                        href="side-menu-light-pricing-layout-1.html"
                        className="menu"
                      >
                        <div className="menu__icon">
                          <i data-lucide="zap"></i>
                        </div>
                        <div className="menu__title">Layout 1</div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="side-menu-light-pricing-layout-2.html"
                        className="menu"
                      >
                        <div className="menu__icon">
                          <i data-lucide="zap"></i>
                        </div>
                        <div className="menu__title">Layout 2</div>
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="javascript:;" className="menu">
                    <div className="menu__icon">
                      <i data-lucide="activity"></i>
                    </div>
                    <div className="menu__title">
                      Invoice
                      <i
                        data-lucide="chevron-down"
                        className="menu__sub-icon "
                      ></i>
                    </div>
                  </a>
                  <ul className="">
                    <li>
                      <a
                        href="side-menu-light-invoice-layout-1.html"
                        className="menu"
                      >
                        <div className="menu__icon">
                          <i data-lucide="zap"></i>
                        </div>
                        <div className="menu__title">Layout 1</div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="side-menu-light-invoice-layout-2.html"
                        className="menu"
                      >
                        <div className="menu__icon">
                          <i data-lucide="zap"></i>
                        </div>
                        <div className="menu__title">Layout 2</div>
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="javascript:;" className="menu">
                    <div className="menu__icon">
                      <i data-lucide="activity"></i>
                    </div>
                    <div className="menu__title">
                      FAQ
                      <i
                        data-lucide="chevron-down"
                        className="menu__sub-icon "
                      ></i>
                    </div>
                  </a>
                  <ul className="">
                    <li>
                      <a
                        href="side-menu-light-faq-layout-1.html"
                        className="menu"
                      >
                        <div className="menu__icon">
                          <i data-lucide="zap"></i>
                        </div>
                        <div className="menu__title">Layout 1</div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="side-menu-light-faq-layout-2.html"
                        className="menu"
                      >
                        <div className="menu__icon">
                          <i data-lucide="zap"></i>
                        </div>
                        <div className="menu__title">Layout 2</div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="side-menu-light-faq-layout-3.html"
                        className="menu"
                      >
                        <div className="menu__icon">
                          <i data-lucide="zap"></i>
                        </div>
                        <div className="menu__title">Layout 3</div>
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="login-light-login.html" className="menu">
                    <div className="menu__icon">
                      <i data-lucide="activity"></i>
                    </div>
                    <div className="menu__title"> Login </div>
                  </a>
                </li>
                <li>
                  <a href="login-light-register.html" className="menu">
                    <div className="menu__icon">
                      <i data-lucide="activity"></i>
                    </div>
                    <div className="menu__title"> Register </div>
                  </a>
                </li>
                <li>
                  <a href="main-light-error-page.html" className="menu">
                    <div className="menu__icon">
                      <i data-lucide="activity"></i>
                    </div>
                    <div className="menu__title"> Error Page </div>
                  </a>
                </li>
                <li>
                  <a
                    href="side-menu-light-update-profile.html"
                    className="menu"
                  >
                    <div className="menu__icon">
                      <i data-lucide="activity"></i>
                    </div>
                    <div className="menu__title"> Update profile </div>
                  </a>
                </li>
                <li>
                  <a
                    href="side-menu-light-change-password.html"
                    className="menu"
                  >
                    <div className="menu__icon">
                      <i data-lucide="activity"></i>
                    </div>
                    <div className="menu__title"> Change Password </div>
                  </a>
                </li>
              </ul>
            </li>
            <li className="menu__devider my-6"></li>
            <li>
              <a href="javascript:;" className="menu">
                <div className="menu__icon">
                  <i data-lucide="inbox"></i>
                </div>
                <div className="menu__title">
                  Components
                  <i data-lucide="chevron-down" className="menu__sub-icon "></i>
                </div>
              </a>
              <ul className="">
                <li>
                  <a href="javascript:;" className="menu">
                    <div className="menu__icon">
                      <i data-lucide="activity"></i>
                    </div>
                    <div className="menu__title">
                      Table
                      <i
                        data-lucide="chevron-down"
                        className="menu__sub-icon "
                      ></i>
                    </div>
                  </a>
                  <ul className="">
                    <li>
                      <a
                        href="side-menu-light-regular-table.html"
                        className="menu"
                      >
                        <div className="menu__icon">
                          <i data-lucide="zap"></i>
                        </div>
                        <div className="menu__title">Regular Table</div>
                      </a>
                    </li>
                    <li>
                      <a href="side-menu-light-tabulator.html" className="menu">
                        <div className="menu__icon">
                          <i data-lucide="zap"></i>
                        </div>
                        <div className="menu__title">Tabulator</div>
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="javascript:;" className="menu">
                    <div className="menu__icon">
                      <i data-lucide="activity"></i>
                    </div>
                    <div className="menu__title">
                      Overlay
                      <i
                        data-lucide="chevron-down"
                        className="menu__sub-icon "
                      ></i>
                    </div>
                  </a>
                  <ul className="">
                    <li>
                      <a href="side-menu-light-modal.html" className="menu">
                        <div className="menu__icon">
                          <i data-lucide="zap"></i>
                        </div>
                        <div className="menu__title">Modal</div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="side-menu-light-slide-over.html"
                        className="menu"
                      >
                        <div className="menu__icon">
                          <i data-lucide="zap"></i>
                        </div>
                        <div className="menu__title">Slide Over</div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="side-menu-light-notification.html"
                        className="menu"
                      >
                        <div className="menu__icon">
                          <i data-lucide="zap"></i>
                        </div>
                        <div className="menu__title">Notification</div>
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="side-menu-light-Tab.html" className="menu">
                    <div className="menu__icon">
                      <i data-lucide="activity"></i>
                    </div>
                    <div className="menu__title"> Tab </div>
                  </a>
                </li>
                <li>
                  <a href="side-menu-light-accordion.html" className="menu">
                    <div className="menu__icon">
                      <i data-lucide="activity"></i>
                    </div>
                    <div className="menu__title"> Accordion </div>
                  </a>
                </li>
                <li>
                  <a href="side-menu-light-button.html" className="menu">
                    <div className="menu__icon">
                      <i data-lucide="activity"></i>
                    </div>
                    <div className="menu__title"> Button </div>
                  </a>
                </li>
                <li>
                  <a href="side-menu-light-alert.html" className="menu">
                    <div className="menu__icon">
                      <i data-lucide="activity"></i>
                    </div>
                    <div className="menu__title"> Alert </div>
                  </a>
                </li>
                <li>
                  <a href="side-menu-light-progress-bar.html" className="menu">
                    <div className="menu__icon">
                      <i data-lucide="activity"></i>
                    </div>
                    <div className="menu__title"> Progress Bar </div>
                  </a>
                </li>
                <li>
                  <a href="side-menu-light-tooltip.html" className="menu">
                    <div className="menu__icon">
                      <i data-lucide="activity"></i>
                    </div>
                    <div className="menu__title"> Tooltip </div>
                  </a>
                </li>
                <li>
                  <a href="side-menu-light-dropdown.html" className="menu">
                    <div className="menu__icon">
                      <i data-lucide="activity"></i>
                    </div>
                    <div className="menu__title"> Dropdown </div>
                  </a>
                </li>
                <li>
                  <a href="side-menu-light-typography.html" className="menu">
                    <div className="menu__icon">
                      <i data-lucide="activity"></i>
                    </div>
                    <div className="menu__title"> Typography </div>
                  </a>
                </li>
                <li>
                  <a href="side-menu-light-icon.html" className="menu">
                    <div className="menu__icon">
                      <i data-lucide="activity"></i>
                    </div>
                    <div className="menu__title"> Icon </div>
                  </a>
                </li>
                <li>
                  <a href="side-menu-light-loading-icon.html" className="menu">
                    <div className="menu__icon">
                      <i data-lucide="activity"></i>
                    </div>
                    <div className="menu__title"> Loading Icon </div>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="javascript:;" className="menu">
                <div className="menu__icon">
                  <i data-lucide="sidebar"></i>
                </div>
                <div className="menu__title">
                  Forms
                  <i data-lucide="chevron-down" className="menu__sub-icon "></i>
                </div>
              </a>
              <ul className="">
                <li>
                  <a href="side-menu-light-regular-form.html" className="menu">
                    <div className="menu__icon">
                      <i data-lucide="activity"></i>
                    </div>
                    <div className="menu__title"> Regular Form </div>
                  </a>
                </li>
                <li>
                  <a href="side-menu-light-datepicker.html" className="menu">
                    <div className="menu__icon">
                      <i data-lucide="activity"></i>
                    </div>
                    <div className="menu__title"> Datepicker </div>
                  </a>
                </li>
                <li>
                  <a href="side-menu-light-tom-select.html" className="menu">
                    <div className="menu__icon">
                      <i data-lucide="activity"></i>
                    </div>
                    <div className="menu__title"> Tom Select </div>
                  </a>
                </li>
                <li>
                  <a href="side-menu-light-file-upload.html" className="menu">
                    <div className="menu__icon">
                      <i data-lucide="activity"></i>
                    </div>
                    <div className="menu__title"> File Upload </div>
                  </a>
                </li>
                <li>
                  <a href="javascript:;" className="menu">
                    <div className="menu__icon">
                      <i data-lucide="activity"></i>
                    </div>
                    <div className="menu__title">
                      Wysiwyg Editor
                      <i
                        data-lucide="chevron-down"
                        className="menu__sub-icon "
                      ></i>
                    </div>
                  </a>
                  <ul className="">
                    <li>
                      <a
                        href="side-menu-light-wysiwyg-editor-classic.html"
                        className="menu"
                      >
                        <div className="menu__icon">
                          <i data-lucide="zap"></i>
                        </div>
                        <div className="menu__title">Classic</div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="side-menu-light-wysiwyg-editor-inline.html"
                        className="menu"
                      >
                        <div className="menu__icon">
                          <i data-lucide="zap"></i>
                        </div>
                        <div className="menu__title">Inline</div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="side-menu-light-wysiwyg-editor-balloon.html"
                        className="menu"
                      >
                        <div className="menu__icon">
                          <i data-lucide="zap"></i>
                        </div>
                        <div className="menu__title">Balloon</div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="side-menu-light-wysiwyg-editor-balloon-block.html"
                        className="menu"
                      >
                        <div className="menu__icon">
                          <i data-lucide="zap"></i>
                        </div>
                        <div className="menu__title">Balloon Block</div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="side-menu-light-wysiwyg-editor-document.html"
                        className="menu"
                      >
                        <div className="menu__icon">
                          <i data-lucide="zap"></i>
                        </div>
                        <div className="menu__title">Document</div>
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="side-menu-light-validation.html" className="menu">
                    <div className="menu__icon">
                      <i data-lucide="activity"></i>
                    </div>
                    <div className="menu__title"> Validation </div>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="javascript:;" className="menu">
                <div className="menu__icon">
                  <i data-lucide="hard-drive"></i>
                </div>
                <div className="menu__title">
                  Widgets
                  <i data-lucide="chevron-down" className="menu__sub-icon "></i>
                </div>
              </a>
              <ul className="">
                <li>
                  <a href="side-menu-light-chart.html" className="menu">
                    <div className="menu__icon">
                      <i data-lucide="activity"></i>
                    </div>
                    <div className="menu__title"> Chart </div>
                  </a>
                </li>
                <li>
                  <a href="side-menu-light-slider.html" className="menu">
                    <div className="menu__icon">
                      <i data-lucide="activity"></i>
                    </div>
                    <div className="menu__title"> Slider </div>
                  </a>
                </li>
                <li>
                  <a href="side-menu-light-image-zoom.html" className="menu">
                    <div className="menu__icon">
                      <i data-lucide="activity"></i>
                    </div>
                    <div className="menu__title"> Image Zoom </div>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="top-bar-boxed h-[70px] md:h-[65px] z-[51] border-b border-white/[0.08] mt-12 md:mt-0 -mx-3 sm:-mx-8 md:-mx-0 px-3 md:border-b-0 relative md:fixed md:inset-x-0 md:top-0 sm:px-8 md:px-10 md:pt-10 md:bg-gradient-to-b md:from-slate-100 md:to-transparent dark:md:from-darkmode-700">
        <div className="h-full flex items-center">
          <a
            href=""
            className="logo -intro-x hidden md:flex xl:w-[180px] block"
          >
            <img
              alt="Midone - HTML Admin Template"
              src="../../../images/logo.svg"
            />
          </a>
          <nav aria-label="breadcrumb" className="-intro-x h-[45px] mr-auto">
            <ol className="breadcrumb breadcrumb-light">
              <li className="breadcrumb-item">
                <a href="#">Application</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Dashboard
              </li>
            </ol>
          </nav>
          <div className="intro-x relative mr-3 sm:mr-6">
            <div className="search hidden sm:block">
              <input
                type="text"
                className="search__input form-control border-transparent"
                placeholder="Search..."
              />
              <i
                data-lucide="search"
                className="search__icon dark:text-slate-500"
              ></i>
            </div>
            <a className="notification notification--light sm:hidden" href="">
              <i
                data-lucide="search"
                className="notification__icon dark:text-slate-500"
              ></i>
            </a>
            <div className="search-result">
              <div className="search-result__content">
                <div className="search-result__content__title">Pages</div>
                <div className="mb-5">
                  <a href="" className="flex items-center">
                    <div className="w-8 h-8 bg-success/20 dark:bg-success/10 text-success flex items-center justify-center rounded-full">
                      <i className="w-4 h-4" data-lucide="inbox"></i>
                    </div>
                    <div className="ml-3">Mail Settings</div>
                  </a>
                  <a href="" className="flex items-center mt-2">
                    <div className="w-8 h-8 bg-pending/10 text-pending flex items-center justify-center rounded-full">
                      <i className="w-4 h-4" data-lucide="users"></i>
                    </div>
                    <div className="ml-3">Users & Permissions</div>
                  </a>
                  <a href="" className="flex items-center mt-2">
                    <div className="w-8 h-8 bg-primary/10 dark:bg-primary/20 text-primary/80 flex items-center justify-center rounded-full">
                      <i className="w-4 h-4" data-lucide="credit-card"></i>
                    </div>
                    <div className="ml-3">Transactions Report</div>
                  </a>
                </div>
                <div className="search-result__content__title">Users</div>
                <div className="mb-5">
                  <a href="" className="flex items-center mt-2">
                    <div className="w-8 h-8 image-fit">
                      <img
                        alt="Midone - HTML Admin Template"
                        className="rounded-full"
                        src="dist/images/profile-15.jpg"
                      />
                    </div>
                    <div className="ml-3">Christian Bale</div>
                    <div className="ml-auto w-48 truncate text-slate-500 text-xs text-right">
                      christianbale@left4code.com
                    </div>
                  </a>
                  <a href="" className="flex items-center mt-2">
                    <div className="w-8 h-8 image-fit">
                      <img
                        alt="Midone - HTML Admin Template"
                        className="rounded-full"
                        src="dist/images/profile-7.jpg"
                      />
                    </div>
                    <div className="ml-3">Johnny Depp</div>
                    <div className="ml-auto w-48 truncate text-slate-500 text-xs text-right">
                      johnnydepp@left4code.com
                    </div>
                  </a>
                  <a href="" className="flex items-center mt-2">
                    <div className="w-8 h-8 image-fit">
                      <img
                        alt="Midone - HTML Admin Template"
                        className="rounded-full"
                        src="dist/images/profile-12.jpg"
                      />
                    </div>
                    <div className="ml-3">Robert De Niro</div>
                    <div className="ml-auto w-48 truncate text-slate-500 text-xs text-right">
                      robertdeniro@left4code.com
                    </div>
                  </a>
                  <a href="" className="flex items-center mt-2">
                    <div className="w-8 h-8 image-fit">
                      <img
                        alt="Midone - HTML Admin Template"
                        className="rounded-full"
                        src="dist/images/profile-1.jpg"
                      />
                    </div>
                    <div className="ml-3">Morgan Freeman</div>
                    <div className="ml-auto w-48 truncate text-slate-500 text-xs text-right">
                      morganfreeman@left4code.com
                    </div>
                  </a>
                </div>
                <div className="search-result__content__title">Products</div>
                <a href="" className="flex items-center mt-2">
                  <div className="w-8 h-8 image-fit">
                    <img
                      alt="Midone - HTML Admin Template"
                      className="rounded-full"
                      src="dist/images/preview-1.jpg"
                    />
                  </div>
                  <div className="ml-3">Samsung Q90 QLED TV</div>
                  <div className="ml-auto w-48 truncate text-slate-500 text-xs text-right">
                    Electronic
                  </div>
                </a>
                <a href="" className="flex items-center mt-2">
                  <div className="w-8 h-8 image-fit">
                    <img
                      alt="Midone - HTML Admin Template"
                      className="rounded-full"
                      src="dist/images/preview-14.jpg"
                    />
                  </div>
                  <div className="ml-3">Sony A7 III</div>
                  <div className="ml-auto w-48 truncate text-slate-500 text-xs text-right">
                    Photography
                  </div>
                </a>
                <a href="" className="flex items-center mt-2">
                  <div className="w-8 h-8 image-fit">
                    <img
                      alt="Midone - HTML Admin Template"
                      className="rounded-full"
                      src="dist/images/preview-3.jpg"
                    />
                  </div>
                  <div className="ml-3">Dell XPS 13</div>
                  <div className="ml-auto w-48 truncate text-slate-500 text-xs text-right">
                    PC &amp; Laptop
                  </div>
                </a>
                <a href="" className="flex items-center mt-2">
                  <div className="w-8 h-8 image-fit">
                    <img
                      alt="Midone - HTML Admin Template"
                      className="rounded-full"
                      src="dist/images/preview-11.jpg"
                    />
                  </div>
                  <div className="ml-3">Nike Tanjun</div>
                  <div className="ml-auto w-48 truncate text-slate-500 text-xs text-right">
                    Sport &amp; Outdoor
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="intro-x dropdown mr-4 sm:mr-6">
            <div
              className="dropdown-toggle notification notification--bullet cursor-pointer"
              role="button"
              aria-expanded="false"
              data-tw-toggle="dropdown"
            >
              <i
                data-lucide="bell"
                className="notification__icon dark:text-slate-500"
              ></i>
            </div>
            <div className="notification-content pt-2 dropdown-menu">
              <div className="notification-content__box dropdown-content">
                <div className="notification-content__title">Notifications</div>
                <div className="cursor-pointer relative flex items-center ">
                  <div className="w-12 h-12 flex-none image-fit mr-1">
                    <img
                      alt="Midone - HTML Admin Template"
                      className="rounded-full"
                      src="dist/images/profile-15.jpg"
                    />
                    <div className="w-3 h-3 bg-success absolute right-0 bottom-0 rounded-full border-2 border-white"></div>
                  </div>
                  <div className="ml-2 overflow-hidden">
                    <div className="flex items-center">
                      <a
                        href="javascript:;"
                        className="font-medium truncate mr-5"
                      >
                        Christian Bale
                      </a>
                      <div className="text-xs text-slate-400 ml-auto whitespace-nowrap">
                        06:05 AM
                      </div>
                    </div>
                    <div className="w-full truncate text-slate-500 mt-0.5">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem
                    </div>
                  </div>
                </div>
                <div className="cursor-pointer relative flex items-center mt-5">
                  <div className="w-12 h-12 flex-none image-fit mr-1">
                    <img
                      alt="Midone - HTML Admin Template"
                      className="rounded-full"
                      src="dist/images/profile-7.jpg"
                    />
                    <div className="w-3 h-3 bg-success absolute right-0 bottom-0 rounded-full border-2 border-white"></div>
                  </div>
                  <div className="ml-2 overflow-hidden">
                    <div className="flex items-center">
                      <a
                        href="javascript:;"
                        className="font-medium truncate mr-5"
                      >
                        Johnny Depp
                      </a>
                      <div className="text-xs text-slate-400 ml-auto whitespace-nowrap">
                        06:05 AM
                      </div>
                    </div>
                    <div className="w-full truncate text-slate-500 mt-0.5">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the
                      industry&#039;s standard dummy text ever since the 1500
                    </div>
                  </div>
                </div>
                <div className="cursor-pointer relative flex items-center mt-5">
                  <div className="w-12 h-12 flex-none image-fit mr-1">
                    <img
                      alt="Midone - HTML Admin Template"
                      className="rounded-full"
                      src="dist/images/profile-12.jpg"
                    />
                    <div className="w-3 h-3 bg-success absolute right-0 bottom-0 rounded-full border-2 border-white"></div>
                  </div>
                  <div className="ml-2 overflow-hidden">
                    <div className="flex items-center">
                      <a
                        href="javascript:;"
                        className="font-medium truncate mr-5"
                      >
                        Robert De Niro
                      </a>
                      <div className="text-xs text-slate-400 ml-auto whitespace-nowrap">
                        05:09 AM
                      </div>
                    </div>
                    <div className="w-full truncate text-slate-500 mt-0.5">
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature from 45 BC, making it over 20
                    </div>
                  </div>
                </div>
                <div className="cursor-pointer relative flex items-center mt-5">
                  <div className="w-12 h-12 flex-none image-fit mr-1">
                    <img
                      alt="Midone - HTML Admin Template"
                      className="rounded-full"
                      src="dist/images/profile-1.jpg"
                    />
                    <div className="w-3 h-3 bg-success absolute right-0 bottom-0 rounded-full border-2 border-white"></div>
                  </div>
                  <div className="ml-2 overflow-hidden">
                    <div className="flex items-center">
                      <a
                        href="javascript:;"
                        className="font-medium truncate mr-5"
                      >
                        Morgan Freeman
                      </a>
                      <div className="text-xs text-slate-400 ml-auto whitespace-nowrap">
                        01:10 PM
                      </div>
                    </div>
                    <div className="w-full truncate text-slate-500 mt-0.5">
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature from 45 BC, making it over 20
                    </div>
                  </div>
                </div>
                <div className="cursor-pointer relative flex items-center mt-5">
                  <div className="w-12 h-12 flex-none image-fit mr-1">
                    <img
                      alt="Midone - HTML Admin Template"
                      className="rounded-full"
                      src="dist/images/profile-11.jpg"
                    />
                    <div className="w-3 h-3 bg-success absolute right-0 bottom-0 rounded-full border-2 border-white"></div>
                  </div>
                  <div className="ml-2 overflow-hidden">
                    <div className="flex items-center">
                      <a
                        href="javascript:;"
                        className="font-medium truncate mr-5"
                      >
                        Russell Crowe
                      </a>
                      <div className="text-xs text-slate-400 ml-auto whitespace-nowrap">
                        06:05 AM
                      </div>
                    </div>
                    <div className="w-full truncate text-slate-500 mt-0.5">
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature from 45 BC, making it over 20
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="intro-x dropdown w-8 h-8">
            <div
              className="dropdown-toggle w-8 h-8 rounded-full overflow-hidden shadow-lg image-fit zoom-in scale-110"
              role="button"
              aria-expanded="false"
              data-tw-toggle="dropdown"
            >
              <img
                alt="Midone - HTML Admin Template"
                src="dist/images/profile-5.jpg"
              />
            </div>
            <div className="dropdown-menu w-56">
              <ul className="dropdown-content bg-primary/80 before:block before:absolute before:bg-black before:inset-0 before:rounded-md before:z-[-1] text-white">
                <li className="p-2">
                  <div className="font-medium">Christian Bale</div>
                  <div className="text-xs text-white/60 mt-0.5 dark:text-slate-500">
                    Backend Engineer
                  </div>
                </li>
                <li>
                  <hr className="dropdown-divider border-white/[0.08]" />
                </li>
                <li>
                  <a href="" className="dropdown-item hover:bg-white/5">
                    <i data-lucide="user" className="w-4 h-4 mr-2"></i> Profile
                  </a>
                </li>
                <li>
                  <a href="" className="dropdown-item hover:bg-white/5">
                    <i data-lucide="edit" className="w-4 h-4 mr-2"></i> Add
                    Account
                  </a>
                </li>
                <li>
                  <a href="" className="dropdown-item hover:bg-white/5">
                    <i data-lucide="lock" className="w-4 h-4 mr-2"></i> Reset
                    Password
                  </a>
                </li>
                <li>
                  <a href="" className="dropdown-item hover:bg-white/5">
                    <i data-lucide="help-circle" className="w-4 h-4 mr-2"></i>
                    Help
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider border-white/[0.08]" />
                </li>
                <li>
                  <a href="" className="dropdown-item hover:bg-white/5">
                    <i data-lucide="toggle-right" className="w-4 h-4 mr-2"></i>
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
