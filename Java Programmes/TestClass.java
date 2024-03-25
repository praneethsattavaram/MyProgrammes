package p1;
public class ClassA
{
	public void displayA()
	{
		System.out.println("Class A");
	}
}

import p1.ClassA;
class Testclass
{
	public static void main(string str[])
	{
		ClassA obA=new ClassA();
		obA.displayA();
	}
}