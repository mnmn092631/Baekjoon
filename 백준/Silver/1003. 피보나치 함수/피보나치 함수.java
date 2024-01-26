import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
	
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringBuilder sb = new StringBuilder();
		
		int[] countZero = new int[41];
		int[] countOne = new int[41];
		
		countZero[0] = 1;
		countZero[2] = 1;

		countOne[1] = 1;
		countOne[2] = 1;
		
		int i = 3;
		while(i < 41) {
			countZero[i] = countZero[i - 1] + countZero[i - 2];
			countOne[i] = countOne[i - 1] + countOne[i - 2];
			i++;
		}
		
		int t = Integer.parseInt(br.readLine());
		while(t-- > 0) {
			int n = Integer.parseInt(br.readLine());
			sb.append(countZero[n]).append(" ").append(countOne[n]).append("\n");
		}
		
		System.out.print(sb);
	}

}
