import { useState } from "react";
import links from "../../utils/ProfileSideNavLinks";
import Profile from "./partials/Profile";
import Address from "./partials/Address";

const ProfileLayout = () => {
  const [currentPage, setCurrentPage] = useState("profile");

  const currentPageHandler = (page) => {
    setCurrentPage(page);
  };

  const renderPageComponent = () => {
    switch (currentPage) {
      case "profile":
        return <Profile />;
      case "address":
        return <Address />;
      default:
        return null;
    }
  };

  return (
    <>
      <section className="container mx-auto py-10">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-4">
            <ul className="menu bg-gray-100 rounded-md">
              {links.map((link, i) =>
                link.nested === false ? (
                  <li
                    key={i}
                    className={`btn-ghost py-2 px-4 mb-1 cursor-pointer rounded-lg hover:bg-gray-300 ${
                      currentPage === link.to && "bg-gray-300"
                    }`}
                    onClick={() => currentPageHandler(link.to)}
                  >
                    {link.title}
                  </li>
                ) : (
                  <li key={i}>
                    <details>
                      <summary>{link.title}</summary>
                      <ul>
                        {link.nestedLinks.map((nestedLink, j) => (
                          <li
                            key={`${i}-${j}`}
                            className={`btn-ghost py-2 px-4 cursor-pointer rounded-lg hover:bg-gray-300 ${
                              currentPage === nestedLink.to && "bg-gray-300"
                            }`}
                            onClick={() => currentPageHandler(nestedLink.to)}
                          >
                            {nestedLink.title}
                          </li>
                        ))}
                      </ul>
                    </details>
                  </li>
                )
              )}
            </ul>
          </div>
          <div className="col-span-8 py-3 px-4 border rounded-md">
            {/* render page component according to currentPage state */}
            {renderPageComponent()}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProfileLayout;
