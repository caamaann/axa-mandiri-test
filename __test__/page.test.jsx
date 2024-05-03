import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import Page from "../src/app/page"

describe("IndexPage", () => {
  it("renders list of users", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve([
            { id: 1, name: "User 1" },
            { id: 2, name: "User 2" },
          ]),
      })
    )

    render(await Page())
    await screen.findByText("List User")

    expect(screen.getByText("User 1")).toBeInTheDocument()
    expect(screen.getByText("User 2")).toBeInTheDocument()
  })

  it("failed fetching", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
      })
    )

    render(await Page())
    await screen.findByText("List User")
  })
})
