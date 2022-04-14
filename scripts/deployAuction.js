async function main() {
  const Auction = await ethers.getContractFactory("Auction");
  const auction = await Auction.deploy("Auction Contract");

  console.log("My Contract deployed to:", auction.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
});
