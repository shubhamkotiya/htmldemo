module Week
   FIRST_DAY = "Sunday"
   def weeks_in_month
      puts "You have four weeks in a month"
   end
   def Week.weeks_in_year
      puts "You have 52 weeks in a year"
   end
end

class Decade
	include Week
   no_of_yrs = 10
   def no_of_months
      puts Week::FIRST_DAY
      number = 10*12
      puts number
   end
end
d1 = Decade.new
puts Week::FIRST_DAY
d1.weeks_in_month
Week.weeks_in_year
d1.no_of_months
# module can be extend and include not class
# module instance method can be include and exclude
# but module class method can be reqire and it is call throough only module not by target class

puts "shubham"
<<<<<<< 1efb7e0fd9a6d4d8e6067c93569f71686634cb3f
put "module master"
puts "B commit 2"
=======
put "module master

<<<<<<< b6a9c6f013fe2cc4b1a371b464903c0a890bf24a
puts "master commit 1"
>>>>>>> m r 1
=======
puts "master commit 2"
>>>>>>> m r 2
