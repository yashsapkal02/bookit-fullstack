const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t mt-10 py-6 text-center text-sm text-gray-500">
      <p>
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold text-blue-600">BookIt</span> — Designed
        with ❤️ like Airbnb
      </p>
      <p className="mt-1">
        <a
          href="#"
          className="text-blue-500 hover:underline"
        >
          Terms & Conditions
        </a>{" "}
        •{" "}
        <a
          href="#"
          className="text-blue-500 hover:underline"
        >
          Privacy Policy
        </a>
      </p>
    </footer>
  );
};

export default Footer;
