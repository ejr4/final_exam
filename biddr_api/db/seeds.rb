
Bid.destroy_all
Auction.destroy_all


44.times do |num|
  d = DateTime.new(2018,rand(1..12),rand(1..28),rand(0..23))
  a = Auction.create({
    title: "#{Faker::Space.galaxy}-#{num}",
    details: Faker::Seinfeld.quote,
    r_price: Faker::Commerce.price,
    ending_date: d
    })
    if a.valid?
      rand(0..7).times.each do
        b = Bid.create(
          amount: Faker::Commerce.price,
          auction: a
        )
      end
    end
  end

puts "Created #{Auction.count} auctions"
puts "Created #{Bid.count} bids"

