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
put "module master
