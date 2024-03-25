class Dimensions 
{
	int length;
	int breadth;
}
class Rectangle extends Dimensions 
{
	int area;
	void area()
	{
		area=length*breadth;
	}
}
class SingleInheritance
{
	public static void main(String[] args)
	{
		Rectangle Rect = new Rectangle ();
		Rect.length=7;
		Rect.breadth=16;
		Rect.area();
		System.out.println("The area of rectangle of length" +Rect.length+ "and breadth" +Rect.breadth+ "is" +Rect.area);
	}
}
