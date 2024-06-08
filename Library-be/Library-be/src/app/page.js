import Link from "next/link";


export default function Home() {
    let usr = "Users";
    let aut = "Authors";
    let bks = "Books";
    let ord = "Orders";
    let ctg = "Categories";

  return (
      <>
          <div className="row">
                  <div className="col-md-3">
                      <div className="card">
                          <div className="card-header">{usr}</div>
                          <div className="card-body">
                              <h3 className="card-title">{usr} Page</h3>
                              <p className="card-text">
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed molestie lacus.
                                  Aenean bibendum, nulla eu mollis faucibus, diam lectus cursus quam, sit amet
                                  blandit elit dui vitae lorem.
                              </p>
                              <Link href={'/users'} className={'btn btn-outline-primary'}>Go To {usr}!</Link>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-3">
                      <div className="card">
                          <div className="card-header">{aut}</div>
                          <div className="card-body">
                              <h3 className="card-title">{aut} Page</h3>
                              <p className="card-text">
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed molestie lacus.
                                  Aenean bibendum, nulla eu mollis faucibus, diam lectus cursus quam, sit amet
                                  blandit elit dui vitae lorem.
                              </p>
                              <Link href={'/authors'} className={'btn btn-outline-primary'}>Go To {aut}!</Link>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-3">
                      <div className="card">
                          <div className="card-header">{bks}</div>
                          <div className="card-body">
                              <h3 className="card-title">{bks} Page</h3>
                              <p className="card-text">
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed molestie lacus.
                                  Aenean bibendum, nulla eu mollis faucibus, diam lectus cursus quam, sit amet
                                  blandit elit dui vitae lorem.
                              </p>
                              <Link href={'/books'} className={'btn btn-outline-primary'}>Go To {bks}!</Link>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-3">
                      <div className="card">
                          <div className="card-header">{ctg}</div>
                          <div className="card-body">
                              <h3 className="card-title">{ctg} Page</h3>
                              <p className="card-text">
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed molestie lacus.
                                  Aenean bibendum, nulla eu mollis faucibus, diam lectus cursus quam, sit amet
                                  blandit elit dui vitae lorem.
                              </p>
                              <Link href={'/categories'} className={'btn btn-outline-primary'}>Go To {ctg}!</Link>
                          </div>
                      </div>
                  </div>
          </div>
      </>
  );
}