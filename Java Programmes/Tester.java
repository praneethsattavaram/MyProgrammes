public class Tester
{
	int i=10;
	static int j=20;
	void methodOne()
	{
		System.out.println("i="+i);
		System.out.println("j="+j);
	}
	static void methodTwo()
	{
		Tester t=new Tester();
		System.out.println("i="+t.j);
		System.out.println("j="+j);
	}
	public static void main(String[] a)
	{
		Tester t=new Tester();
		t.methodOne();
		methodTwo();
	}
}