import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
      <>
          <div className="row">
              <div className="col-md-4">
                  <div className="card">
                      <div className="card-header">
                          Users
                      </div>
                      <div className="card-body">
                          <h5 className="card-title">Users page</h5>
                          <p className="card-text">
                              Encourage other users to follow or connect with the profile.
                              Make it visually appealing and easy to locate.
                          </p>
                          <Link href={'/users'} className={'btn btn-primary'}>Go to users</Link>
                      </div>
                  </div>
              </div>

              <div className="col-md-4">
                  <div className="card">
                      <div className="card-header">
                          Authors
                      </div>
                      <div className="card-body">
                          <h5 className="card-title">Authors page</h5>
                          <p className="card-text">
                              Showcase your own books! Share visually appealing images of your book covers, snippets from the book, or even a teaser quote.
                              Announce new releases, special editions, or upcoming projects.
                          </p>
                          <Link href={'/authors'} className={'btn btn-primary'}>Go to authors</Link>
                      </div>
                  </div>
              </div>

              <div className="col-md-4">
                  <div className="card">
                      <div className="card-header">
                          Categories
                      </div>
                      <div className="card-body">
                          <h5 className="card-title">Categories page</h5>
                          <p className="card-text">
                              Highlight real-world examples of success stories.
                              Explain challenges, solutions, and outcomes.
                          </p>
                          <Link href={'/categories'} className={'btn btn-primary'}>Go to categories</Link>
                      </div>
                  </div>
              </div>

              <div className="col-md-4">
                  <div className="card">
                      <div className="card-header">
                          Books
                      </div>
                      <div className="card-body">
                          <h5 className="card-title">Books page</h5>
                          <p className="card-text">
                              Share powerful, thought-provoking quotes from books.
                              Post excerpts that capture the essence of a novel or evoke emotions.
                          </p>
                          <Link href={'/books'} className={'btn btn-primary'}>Go to books</Link>
                      </div>
                  </div>
              </div>

              <div className="col-md-4">
                  <div className="card">
                      <div className="card-header">
                          Orders
                      </div>
                      <div className="card-body">
                          <h5 className="card-title">Orders page</h5>
                          <p className="card-text">
                              Display a concise list of orders, including order numbers, customer names, order dates, and order statuses.
                              Use clear headings and columns for easy scanning.
                          </p>
                          <Link href={'/orders'} className={'btn btn-primary'}>Go to orders</Link>
                      </div>
                  </div>
              </div>
          </div>
      </>
  );
}
