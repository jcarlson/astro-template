import { expect, test, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import Footer from "@/components/Footer";

describe("Footer", () => {
  test("Mastodon Link", () => {
    render(<Footer />);

    const link = screen.getByRole("link", { name: /Follow Astro on Mastodon/ });

    expect(link).toBeDefined();
    expect(link.getAttribute("href")).toBe("https://m.webtoo.ls/@astro");
  });

  test("Twitter Link", () => {
    render(<Footer />);

    const link = screen.getByRole("link", { name: /Follow Astro on Twitter/ });

    expect(link).toBeDefined();
    expect(link.getAttribute("href")).toBe("https://twitter.com/astrodotbuild");
  });

  test("GitHub Link", () => {
    render(<Footer />);

    const link = screen.getByRole("link", {
      name: /Go to Astro's GitHub repo/,
    });

    expect(link).toBeDefined();
    expect(link.getAttribute("href")).toBe(
      "https://github.com/withastro/astro",
    );
  });
});
