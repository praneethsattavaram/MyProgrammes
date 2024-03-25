interface Arithematic 
{
	void add(int a,int b);
	void sub(int a,int b);
	void mul(int a,int b);
	void div(int a,int b);
}
class A implements Arithematic
{
	public void add(int a,int b)
	{
		System.out.println("sum is"+(a+b));
	}
	public void sub(int a,int b)
	{
		System.out.println("sub is"+(a-b));
	}
	public void mul(int a,int b)
	{
		System.out.println("mul is"+(a*b));
	}
	public void div(int a,int b)
	{
		System.out.println("div is"+(a/b));
	}
}
class InterfaceDemo
{
	public static void main(String h[])
	{
		A a1=new A();
		a1.add(3,4);
		a1.sub(4,5);
		a1.mul(4,5);
		a1.div(4,5);
	}
}
