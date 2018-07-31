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
var2=c.ram(5)
puts (var2)
var3 = c2.ram(8)
