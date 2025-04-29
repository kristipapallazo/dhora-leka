// import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <footer
      className="bg-hunter text-white py-6 mt-10"
      style={{ flexShrink: 1, width: "100%" }}
    >
      <div className="container mx-auto text-center">
        &copy; {new Date().getFullYear()} SchoolName. All rights reserved.
      </div>
    </footer>
  );
};

export default Navbar;
