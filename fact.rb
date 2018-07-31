class Func
  def ram(var1)
    def fun(var)
      if var==1 
        return var
      else
        return (var*fun(var-1))
      end
    end
    fun(var1)
  end
end
c = Func.new
c1 = Func.new
c2 = Func.new 
c3 Func.new
var2=c.ram(5)
puts (var2)
var3 = c2.ram(8)
puts "m4"
puts "m2"
puts "m3"


puts "B m5"

 puts "master m6"
 puts "master fact"
