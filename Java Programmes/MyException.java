class OwnException extends Exception 
{
	OwnException(String msg)
	{
		super(msg);
	}
}
class MyException
{
	public static void main(String a[])
	{
		int marks=Integer.parseInt(a[0]);
	try
	{
		if(marks<0||marks>100)
		{
			throw new OwnException("Marks should be in b/w 0 to 100");
		}
		else
		System.out.println("entered marks are" +marks);
	}
	catch(OwnException e)
		{
			System.out.println(e.getMessage());
		}
	}
}
